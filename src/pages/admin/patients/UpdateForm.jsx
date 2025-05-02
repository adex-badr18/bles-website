import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import MultiStepForm from "../../../components/MultiStepForm";
import PersonalStep from "../../user/patientForms/components/patientReg/PersonalStep";
import OtherContactsForm from "../../user/patientForms/components/patientReg/OtherContactsForm";
import InsuranceForm from "../../user/patientForms/components/patientReg/InsuranceForm";
import ConsentForm from "../../user/patientForms/components/patientReg/ConsentForm";
import PdfPreview from "../../../components/PdfPreview";
import PdfDoc from "../../user/patientForms/components/patientReg/PdfDoc";
import PageTitle from "../components/PageTitle";

import { pdf } from "@react-pdf/renderer";

import { useToast } from "../../../components/ToastContext";
import {
    useUploadFile,
    useUpdatePatient,
    useGetRegInfo,
} from "../../../hooks/usePatients";
import {
    objectToFormData,
    convertToBoolean,
    formatToYYYYMMDD,
} from "../../utils";
import { initialPatientRegFormData } from "./data";

const UpdateForm = () => {
    // const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const { showToast } = useToast();
    const { id } = useParams();
    const {
        data: patient,
        isLoading: isPatientLoading,
        isSuccess: isPatientSuccess,
        isError: isPatientError,
        error: patientError,
    } = useGetRegInfo(id || "");
    const {
        mutateAsync: mutateUpdate,
        isPending: isUpdating,
        error: updateError,
        data: updateData,
    } = useUpdatePatient();

    const { mutateAsync: mutateFile, isPending: isUploading } = useUploadFile({
        handleFormChange: handleFormElementChange,
        field: "file",
        section: "upload",
        showToast,
    });

    const [consents, setConsents] = useState({
        dataAccuracy: true,
        insuranceAuth: true,
        finResponsible: true,
        infoRelease: true,
    });
    const [formData, setFormData] = useState(initialPatientRegFormData);

    console.log(formData);

    useEffect(() => {
        if (isPatientSuccess && patient) {
            const insurances = patient.paymentStructure?.insurances || [];

            const primaryInsurance =
                insurances.filter((insurance) => !!insurance.primary) || {};

            const secondaryInsurance =
                insurances.filter((insurance) => !insurance.primary) || {};

            setFormData({
                identification: {
                    id: patient?.id,
                    patientId: patient?.patientId,
                },
                personal: {
                    firstName: patient?.personalInfo?.firstName || "",
                    middleName: patient?.personalInfo?.middleName || "",
                    lastName: patient?.personalInfo?.lastName || "",
                    gender: patient?.personalInfo?.gender || "",
                    dob: patient?.personalInfo?.dob
                        ? new Date(patient?.personalInfo?.dob)
                        : null,
                    maritalStatus: patient?.personalInfo?.maritalStatus || "",
                    socialSecurityNumber:
                        patient?.personalInfo?.socialSecurityNumber || "",
                    homePhone: patient?.personalInfo?.homePhone || "",
                    cellPhone: patient?.personalInfo?.cellPhone || "",
                    workPhone: patient?.personalInfo?.workPhone || "",
                    preferredPhone: patient?.personalInfo?.preferredPhone || "",
                    appointmentReminderMode:
                        patient?.personalInfo?.appointmentReminderMode || "",
                    email: patient?.personalInfo?.email || "",
                    sendMsgToHomePhone:
                        patient?.personalInfo?.sendMsgToHomePhone || "",
                    sendMsgToRelative:
                        patient?.personalInfo?.sendMsgToRelative || "",
                    sendMsgToWork: patient?.personalInfo?.sendMsgToWork || "",
                    sendMsgToCellPhone:
                        patient?.personalInfo?.sendMsgToCellPhone || "",
                    address: {
                        streetName:
                            patient?.personalInfo?.address.streetName || "",
                        city: patient?.personalInfo?.address.city || "",
                        state: patient?.personalInfo?.address.state || "",
                        zipCode: patient?.personalInfo?.address.zipCode || "",
                    },
                    highestEduLevel:
                        patient?.personalInfo?.highestEduLevel || "",
                    employmentStatus:
                        patient?.personalInfo?.employmentStatus || "",
                    employer: patient?.personalInfo?.employer || "",
                    occupation: patient?.personalInfo?.occupation || "",
                    religion: patient?.personalInfo?.religion || "",
                    ethnicity: patient?.personalInfo?.ethnicity || "",
                    race: patient?.personalInfo?.race || "",
                    preferredLanguage:
                        patient?.personalInfo?.preferredLanguage || "",
                },
                guarantor: {
                    firstName: patient?.guarantor?.firstName || "",
                    // middleName: patient?.guarantor?.firstName || "",
                    lastName: patient?.guarantor?.lastName || "",
                    dob: patient?.guarantor?.dob
                        ? new Date(patient?.guarantor?.dob)
                        : null,
                    relationship: patient?.guarantor?.relationship || "",
                    address: {
                        streetName:
                            patient?.guarantor?.address?.streetName || "",
                        city: patient?.guarantor?.address?.city || "",
                        state: patient?.guarantor?.address?.state || "",
                        zipCode: patient?.guarantor?.address?.zipCode || "",
                    },
                    phone: patient?.guarantor?.phone || "",
                    email: patient?.guarantor?.email || "",
                    stateIssuedId: patient?.guarantor?.stateIssuedId || "",
                    insuranceCard: patient?.guarantor?.insuranceCard || "",
                },
                parent: {
                    firstName: patient?.parentGuardian?.firstName || "",
                    // middleName: patient?.parentGuardian?.firstName || "",
                    lastName: patient?.parentGuardian?.lastName || "",
                    gender: patient?.parentGuardian?.gender || "",
                    maritalStatus: patient?.parentGuardian?.maritalStatus || "",
                    phone: patient?.parentGuardian?.phone || "",
                    email: patient?.parentGuardian?.email || "",
                    familyRole: patient?.parentGuardian?.familyRole || "",
                    employmentStatus:
                        patient?.parentGuardian?.employmentStatus || "",
                    employer: patient?.parentGuardian?.employer || "",
                    occupation: patient?.parentGuardian?.occupation || "",
                    address: {
                        streetName:
                            patient?.parentGuardian?.address?.streetName || "",
                        city: patient?.parentGuardian?.address?.city || "",
                        state: patient?.parentGuardian?.address?.state || "",
                        zipCode:
                            patient?.parentGuardian?.address?.zipCode || "",
                    },
                },
                emergency: {
                    firstName: patient?.emergency?.firstName || "",
                    // middleName: patient?.emergency?.firstName || "",
                    lastName: patient?.emergency?.lastName || "",
                    relationship: patient?.emergency?.relationship || "",
                    address: {
                        streetName:
                            patient?.emergency?.address?.streetName || "",
                        city: patient?.emergency?.address?.city || "",
                        state: patient?.emergency?.address?.state || "",
                        zipCode: patient?.emergency?.address?.zipCode || "",
                    },
                    homePhone: patient?.emergency?.homePhone || "",
                    cellPhone: patient?.emergency?.cellPhone || "",
                    email: patient?.emergency?.email || "",
                },
                insurance: {
                    paymentMode: patient?.paymentStructure?.paymentMode || "",
                    primaryInsurance: {
                        policyHolder: {
                            firstName:
                                primaryInsurance?.policyHolder?.firstName || "",
                            middleName:
                                primaryInsurance?.policyHolder?.middleName ||
                                "",
                            lastName:
                                primaryInsurance?.policyHolder?.lastName || "",
                            relationship:
                                primaryInsurance?.policyHolder?.relationship ||
                                "",
                            phone: primaryInsurance?.policyHolder?.phone || "",
                            dob: primaryInsurance?.policyHolder?.dob
                                ? new Date(primaryInsurance?.policyHolder?.dob)
                                : null,
                        },
                        insuranceProvider: {
                            name:
                                primaryInsurance?.insuranceProvider?.name || "",
                            phone:
                                primaryInsurance?.insuranceProvider?.phone ||
                                "",
                            policyId:
                                primaryInsurance?.insuranceProvider?.policyId ||
                                "",
                            groupNumber:
                                primaryInsurance?.insuranceProvider
                                    ?.groupNumber || "",
                            authorizationId:
                                primaryInsurance?.insuranceProvider
                                    ?.authorizationId || "",
                            coPay:
                                primaryInsurance?.insuranceProvider?.coPay ||
                                "",
                            coverageStartDate: primaryInsurance
                                ?.insuranceProvider?.coverageStartDate
                                ? new Date(
                                      primaryInsurance?.insuranceProvider?.coverageStartDate
                                  )
                                : null,
                            coverageEndDate: primaryInsurance?.insuranceProvider
                                ?.coverageEndDate
                                ? new Date(
                                      primaryInsurance?.insuranceProvider?.coverageEndDate
                                  ).toLocaleDateString()
                                : null,
                            address: {
                                streetName:
                                    primaryInsurance?.insuranceProvider?.address
                                        ?.streetName || "",
                                city:
                                    primaryInsurance?.insuranceProvider?.address
                                        ?.city || "",
                                state:
                                    primaryInsurance?.insuranceProvider?.address
                                        ?.state || "",
                                zipCode:
                                    primaryInsurance?.insuranceProvider?.address
                                        ?.zipCode || "",
                            },
                        },
                    },
                    secondaryInsurance: {
                        policyHolder: {
                            firstName:
                                secondaryInsurance?.policyHolder?.firstName ||
                                "",
                            middleName:
                                secondaryInsurance?.policyHolder?.middleName ||
                                "",
                            lastName:
                                secondaryInsurance?.policyHolder?.lastName ||
                                "",
                            relationship:
                                secondaryInsurance?.policyHolder
                                    ?.relationship || "",
                            phone:
                                secondaryInsurance?.policyHolder?.phone || "",
                            dob: secondaryInsurance?.policyHolder?.dob
                                ? new Date(
                                      secondaryInsurance?.policyHolder?.dob
                                  ).toLocaleDateString()
                                : null,
                        },
                        insuranceProvider: {
                            name:
                                secondaryInsurance?.insuranceProvider?.name ||
                                "",
                            phone:
                                secondaryInsurance?.insuranceProvider?.phone ||
                                "",
                            policyId:
                                secondaryInsurance?.insuranceProvider
                                    ?.policyId || "",
                            groupNumber:
                                secondaryInsurance?.insuranceProvider
                                    ?.groupNumber || "",
                            authorizationId:
                                secondaryInsurance?.insuranceProvider
                                    ?.authorizationId || "",
                            coverageStartDate: secondaryInsurance
                                ?.insuranceProvider?.coverageStartDate
                                ? new Date(
                                      secondaryInsurance?.insuranceProvider?.coverageStartDate
                                  )
                                : null,
                            coverageEndDate: secondaryInsurance
                                ?.insuranceProvider?.coverageEndDate
                                ? new Date(
                                      secondaryInsurance?.insuranceProvider?.coverageEndDate
                                  ).toLocaleDateString()
                                : null,
                            // haveCoordinationBenefits:
                            //     secondaryInsurance?.insuranceProvider?.haveCoordinationBenefits || "",
                            address: {
                                streetName:
                                    secondaryInsurance?.insuranceProvider
                                        ?.address?.streetName || "",
                                city:
                                    secondaryInsurance?.insuranceProvider
                                        ?.address?.city || "",
                                state:
                                    secondaryInsurance?.insuranceProvider
                                        ?.address?.state || "",
                                zipCode:
                                    secondaryInsurance?.insuranceProvider
                                        ?.address?.zipCode || "",
                            },
                            coPay:
                                secondaryInsurance?.insuranceProvider?.coPay ||
                                "",
                        },
                    },
                },
                consent: {
                    signature: "",
                    date: "",
                },
                upload: { file: "" },
            });
        }
    }, [patient, isPatientSuccess]);

    // Function to open modal
    // function openSuccessModal(data) {
    //     setSuccessModalData(data);
    //     setIsSuccessModalOpen(true);
    // }

    // Handle form element change
    function handleFormElementChange(section, fieldPath, value) {
        setFormData((prev) => {
            const keys = fieldPath.split(".");

            const updateNestedField = (obj, keys, value) => {
                if (keys.length === 1) {
                    return {
                        ...obj,
                        [keys[0]]: value,
                    };
                }

                return {
                    ...obj,
                    [keys[0]]: updateNestedField(
                        obj[keys[0]],
                        keys.slice(1),
                        value
                    ),
                };
            };

            return {
                ...prev,
                [section]: updateNestedField(prev[section], keys, value),
            };
        });
    }

    const submitHandler = async () => {
        // prepare pdf file payload
        const pdfBlob = await pdf(<PdfDoc data={formData} />).toBlob();
        const pdfFile = new File([pdfBlob], "registration-form.pdf", {
            type: "application/pdf",
        });
        const uploadPayload = objectToFormData({
            fileType: "registration-form",
            owner: `${formData.personal.firstName}-${formData.personal.lastName}`,
            file: pdfFile,
        });

        // TODO: Upload pdf file
        await mutateFile(uploadPayload);

        // Prepare register update payload
        const formattedData = {
            id: formData.personal.id,
            patientId: formData.personal.patientId,
            personalInfo: {
                ...formData.personal,
                dob: formatToYYYYMMDD(formData.personal.dob),
                sendMsgToHomePhone: convertToBoolean(
                    formData.personal.sendMsgToHomePhone
                ),
                sendMsgToRelative: convertToBoolean(
                    formData.personal.sendMsgToRelative
                ),
                sendMsgToWork: convertToBoolean(
                    formData.personal.sendMsgToWork
                ),
                sendMsgToCellPhone: convertToBoolean(
                    formData.personal.sendMsgToCellPhone
                ),
            },
            guarantor: {
                ...formData.guarantor,
                dob: formatToYYYYMMDD(formData.guarantor.dob),
            },
            parentGuardian: formData.parent,
            emergency: formData.emergency,
            paymentStructure: {
                paymentMode: formData.insurance.paymentMode,
                insurances: [
                    {
                        ...formData.insurance.primaryInsurance,
                        policyHolder: {
                            ...formData.insurance.primaryInsurance.policyHolder,
                            dob: formatToYYYYMMDD(
                                formData.insurance.primaryInsurance.policyHolder
                                    .dob
                            ),
                        },
                        insuranceProvider: {
                            ...formData.insurance.primaryInsurance
                                .insuranceProvider,
                            coverageStartDate: formatToYYYYMMDD(
                                formData.insurance.primaryInsurance
                                    .insuranceProvider.coverageStartDate
                            ),
                            coverageEndDate: formatToYYYYMMDD(
                                formData.insurance.primaryInsurance
                                    .insuranceProvider.coverageEndDate
                            ),
                        },
                    },
                    {
                        ...formData.insurance.secondaryInsurance,
                        policyHolder: {
                            ...formData.insurance.secondaryInsurance
                                .policyHolder,
                            dob: formatToYYYYMMDD(
                                formData.insurance.secondaryInsurance
                                    .policyHolder.dob
                            ),
                        },
                        insuranceProvider: {
                            ...formData.insurance.secondaryInsurance
                                .insuranceProvider,
                            coverageStartDate: formatToYYYYMMDD(
                                formData.insurance.secondaryInsurance
                                    .insuranceProvider.coverageStartDate
                            ),
                            coverageEndDate: formatToYYYYMMDD(
                                formData.insurance.secondaryInsurance
                                    .insuranceProvider.coverageEndDate
                            ),
                        },
                    },
                ],
            },
            date: formData.consent.date,
            patientformData: formData.upload.file,
        };

        console.log(formattedData);

        const formDataPayload = objectToFormData(formattedData);

        // TODO: register patient
        await mutateUpdate({
            patientId: formData?.patientId,
            payload: formDataPayload,
        });
    };

    const isStepValid = (step) => {
        const requiredFields = [
            "firstName",
            "lastName",
            "gender",
            "dob",
            "maritalStatus",
            "cellPhone",
            "email",
            "address",
            "phone",
            // "patientId",
        ];

        if (step === 1 || step === 2) {
            const dataObj =
                step === 1 ? formData.personal : step === 2 && formData.parent;

            for (const key in dataObj) {
                const value = dataObj[key];

                if (!requiredFields.includes(key)) {
                    continue;
                }

                if (value !== null && typeof value === "object") {
                    for (const key in value) {
                        if (key === "id") {
                            continue;
                        }

                        const nestedValue = value[key];
                        if (nestedValue === "" || nestedValue === null) {
                            return false;
                        }
                    }
                }

                if (value === "" || value === null || value === undefined) {
                    return false;
                }
            }

            return true;
        }

        if (step === 4) {
            for (const key in consents) {
                const value = consents[key];

                if (!value) {
                    return false;
                }
            }

            if (!formData.consent.signature) {
                return false;
            }

            return true;
        }

        return true;
    };

    const formSteps = {
        steps: [
            "Personal",
            "Other Contacts",
            "Insurance",
            "Consent",
            "Preview",
        ],
        forms: [
            {
                id: 1,
                name: "Personal",
                component: (
                    <PersonalStep
                        key={1}
                        formData={formData}
                        handleInputChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 2,
                name: "Other Contacts",
                component: (
                    <OtherContactsForm
                        key={2}
                        formData={formData}
                        handleInputChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 3,
                name: "Insurance",
                component: (
                    <InsuranceForm
                        key={3}
                        formData={formData}
                        handleInputChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 4,
                name: "Consent",
                component: (
                    <ConsentForm
                        key={4}
                        consentData={consents}
                        setConsentData={setConsents}
                        handleInputChange={handleFormElementChange}
                        formData={formData}
                    />
                ),
            },
            {
                id: 5,
                name: "Preview",
                component: (
                    <PdfPreview key={5} Doc={<PdfDoc data={formData} />} />
                ),
            },
        ],
    };

    return (
        <section className="space-y-4 md:spce-y-8">
            <PageTitle title="Update Registration Information" />
            <MultiStepForm
                formSize="md"
                isStepValid={isStepValid}
                stepForms={formSteps.forms}
                steps={formSteps.steps}
                submitHandler={submitHandler}
                // isSuccessModalOpen={isSuccessModalOpen}
                // setIsSuccessModalOpen={setIsSuccessModalOpen}
                // successModalData={successModalData}
                isSubmitting={isUpdating || isUploading}
            />
        </section>
    );
};

export default UpdateForm;
