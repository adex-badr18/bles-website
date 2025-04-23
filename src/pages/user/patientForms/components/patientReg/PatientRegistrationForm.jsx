import { useState } from "react";

import MultiStepForm from "../../../../../components/MultiStepForm";
import PersonalStep from "./PersonalStep";
import OtherContactsForm from "./OtherContactsForm";
import InsuranceForm from "./InsuranceForm";
import ConsentForm from "./ConsentForm";
import PdfPreview from "../../../../../components/PdfPreview";
import PdfDoc from "./PdfDoc";

import { useToast } from "../../../../../components/ToastContext";
import {
    useCreatePatient,
    useUploadFile,
} from "../../../../../hooks/usePatients";
import { objectToFormData, convertToBoolean } from "../../../../utils";
import { pdf } from "@react-pdf/renderer";

const PatientRegistrationForm = () => {
    const { showToast } = useToast();
    const {
        mutateAsync: mutateRegister,
        isPending: isSubmitting,
        error,
        data,
    } = useCreatePatient({
        openModal: openSuccessModal,
        showToast,
    });

    const { mutateAsync: mutateFile, isPending: isUploading } = useUploadFile({
        handleFormChange: handleFormElementChange,
        field: "file",
        section: "upload",
        showToast,
    });

    const [successModalData, setSuccessModalData] = useState({});
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [consents, setConsents] = useState({
        dataAccuracy: true,
        insuranceAuth: true,
        finResponsible: true,
        infoRelease: true,
    });
    const [regForm, setRegForm] = useState({
        personal: {
            id: null,
            patientId: "",
            firstName: "Badru",
            middleName: "Ade",
            lastName: "Ajayi",
            gender: "Male",
            dob: "01/01/1985",
            maritalStatus: "Single",
            socialSecurityNumber: "",
            homePhone: "",
            cellPhone: "09076543212",
            workPhone: "",
            preferredPhone: "",
            appointmentReminderMode: "",
            email: "jamesdee@yahoo.com",
            sendMsgToHomePhone: "",
            sendMsgToRelative: "",
            sendMsgToWork: "",
            sendMsgToCellPhone: "",
            address: {
                id: null,
                streetName: "Wema",
                city: "JohnDey",
                state: "Ospo",
                zipCode: "123456",
            },
            highestEduLevel: "",
            employmentStatus: "",
            employer: "",
            occupation: "",
            religion: "",
            ethnicity: "",
            race: "",
            preferredLanguage: "",
        },
        guarantor: {
            id: null,
            firstName: "Badru",
            lastName: "Ade",
            dob: "",
            relationship: "",
            address: {
                id: null,
                streetName: "",
                city: "",
                state: "",
                zipCode: "",
            },
            phone: "",
            email: "",
            stateIssuedId: "",
            insuranceCard: "",
        },
        parent: {
            id: null,
            firstName: "Badr",
            lastName: "Ade",
            gender: "Male",
            maritalStatus: "Married",
            phone: "124898876",
            email: "adeey@gmail.com",
            familyRole: "Father",
            employmentStatus: "Employed",
            employer: "Acritech Construction",
            occupation: "Engineer",
            address: {
                id: null,
                streetName: "Osko",
                city: "Wembley",
                state: "Wembley",
                zipCode: "123456",
            },
        },
        emergency: {
            id: null,
            firstName: "",
            lastName: "",
            relationship: "",
            address: {
                id: null,
                streetName: "",
                city: "",
                state: "",
                zipCode: "",
            },
            homePhone: "",
            cellPhone: "",
            email: "",
        },
        insurance: {
            paymentMode: "Self Pay",
            primaryInsurance: {
                id: null,
                primary: true,
                policyHolder: {
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    relationship: "",
                    phone: "",
                    dob: "",
                },
                insuranceProvider: {
                    name: "",
                    phone: "",
                    policyId: "",
                    groupNumber: "",
                    authorizationId: "",
                    coPay: "",
                    coverageStartDate: "",
                    coverageEndDate: "",
                    address: {
                        id: null,
                        streetName: "",
                        city: "",
                        state: "",
                        zipCode: "",
                    },
                },
            },
            secondaryInsurance: {
                id: null,
                primary: false,
                policyHolder: {
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    relationship: "",
                    phone: "",
                    dob: "",
                },
                insuranceProvider: {
                    name: "",
                    phone: "",
                    policyId: "",
                    groupNumber: "",
                    authorizationId: "",
                    coverageStartDate: "",
                    coverageEndDate: "",
                    // haveCoordinationBenefits: "",
                    address: {
                        id: null,
                        streetName: "",
                        city: "",
                        state: "",
                        zipCode: "",
                    },
                    coPay: "",
                },
            },
        },
        consent: { signature: "", date: "" },
        upload: { file: "" },
    });

    // Function to open modal
    function openSuccessModal(data) {
        setSuccessModalData(data);
        setIsSuccessModalOpen(true);
    }

    // Handle form element change
    function handleFormElementChange(section, fieldPath, value) {
        setRegForm((prev) => {
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

    // console.log(regForm.personal)

    const submitHandler = async () => {
        // prepare pdf file payload
        const pdfBlob = await pdf(<PdfDoc data={regForm} />).toBlob();
        const pdfFile = new File([pdfBlob], "registration-form.pdf", {
            type: "application/pdf",
        });
        const uploadPayload = objectToFormData({
            fileType: "registration-form",
            owner: `${regForm.personal.firstName}-${regForm.personal.lastName}`,
            file: pdfFile,
        });

        // TODO: Upload pdf file
        await mutateFile(uploadPayload);

        // Prepare register payload
        const data = {
            id: regForm.personal.id,
            patientId: regForm.personal.patientId,
            personalInfo: {
                ...regForm.personal,
                sendMsgToHomePhone: convertToBoolean(
                    regForm.personal.sendMsgToHomePhone
                ),
                sendMsgToRelative: convertToBoolean(
                    regForm.personal.sendMsgToRelative
                ),
                sendMsgToWork: convertToBoolean(regForm.personal.sendMsgToWork),
                sendMsgToCellPhone: convertToBoolean(
                    regForm.personal.sendMsgToCellPhone
                ),
            },
            guarantor: regForm.guarantor,
            parentGuardian: regForm.parent,
            emergency: regForm.emergency,
            paymentStructure: {
                paymentMode: regForm.insurance.paymentMode,
                insurances: [
                    regForm.insurance.primaryInsurance,
                    regForm.insurance.secondaryInsurance,
                ],
            },
            date: regForm.consent.date,
            patientRegForm: regForm.upload.file,
        };
        
        const formData = objectToFormData(data);

        // for (const [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        // }

        // TODO: register patient
        await mutateRegister(formData);
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
            "patientId"
        ];

        if (step === 1 || step === 2) {
            const dataObj =
                step === 1 ? regForm.personal : step === 2 && regForm.parent;

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

            if (!regForm.consent.signature) {
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
                        formData={regForm}
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
                        formData={regForm}
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
                        formData={regForm}
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
                        formData={regForm}
                    />
                ),
            },
            {
                id: 5,
                name: "Preview",
                component: (
                    <PdfPreview key={5} Doc={<PdfDoc data={regForm} />} />
                ),
            },
        ],
    };

    return (
        <div>
            <MultiStepForm
                formSize="md"
                isStepValid={isStepValid}
                stepForms={formSteps.forms}
                steps={formSteps.steps}
                submitHandler={submitHandler}
                isSuccessModalOpen={isSuccessModalOpen}
                setIsSuccessModalOpen={setIsSuccessModalOpen}
                successModalData={successModalData}
                isSubmitting={isSubmitting || isUploading}
            />
        </div>
    );
};

export default PatientRegistrationForm;
