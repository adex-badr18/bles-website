import { useState } from "react";

import MultiStepForm from "../../../../../components/MultiStepForm";
import PersonalStep from "./PersonalStep";
import OtherContactsForm from "./OtherContactsForm";
import InsuranceForm from "./InsuranceForm";
import ConsentForm from "./ConsentForm";
import PdfPreview from "../../../../../components/PdfPreview";
import PdfDoc from "./PdfDoc";

import { useToast } from "../../../../../components/ToastContext";
import { useCreatePatient } from "../../../../../hooks/usePatients";
import { objectToFormData, convertToBoolean } from "../../../../utils";
import { pdf } from "@react-pdf/renderer";

const PatientRegistrationForm = () => {
    const { showToast } = useToast();
    const {mutate, isPending, error, data} = useCreatePatient({ openModal: openSuccessModal, showToast });
    const [successModalData, setSuccessModalData] = useState({});
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [consents, setConsents] = useState({
        dataAccuracy: false,
        insuranceAuth: false,
        finResponsible: false,
        infoRelease: false,
    });
    const [regForm, setRegForm] = useState({
        personal: {
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            dob: "",
            maritalStatus: "",
            socialSecurityNumber: "",
            homePhone: "",
            cellPhone: "",
            workPhone: "",
            preferredPhone: "",
            appointmentReminderMode: "",
            email: "",
            sendMsgToHomePhone: "",
            sendMsgToRelative: "",
            sendMsgToWork: "",
            sendMsgToCellPhone: "",
            address: { streetName: "", city: "", state: "", zipCode: "" },
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
            firstName: "",
            // middleName: "",
            lastName: "",
            dob: "",
            relationship: "",
            address: { streetName: "", city: "", state: "", zipCode: "" },
            phone: "",
            email: "",
            stateIssuedId: "",
            insuranceCard: "",
        },
        parent: {
            firstName: "",
            // middleName: "",
            lastName: "",
            gender: "",
            maritalStatus: "",
            phone: "",
            email: "",
            familyRole: "",
            employmentStatus: "",
            employer: "",
            occupation: "",
            address: { streetName: "", city: "", state: "", zipCode: "" },
        },
        emergency: {
            firstName: "",
            // middleName: "",
            lastName: "",
            relationship: "",
            address: { streetName: "", city: "", state: "", zipCode: "" },
            homePhone: "",
            cellPhone: "",
            email: "",
        },
        insurance: {
            paymentMode: "",
            primaryInsurance: {
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
                        streetName: "",
                        city: "",
                        state: "",
                        zipCode: "",
                    },
                },
            },
            secondaryInsurance: {
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
                    haveCoordinationBenefits: "",
                    address: {
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
    });

    // Function to open modal
    const openSuccessModal = (data) => {
        setSuccessModalData(data);
        setIsSuccessModalOpen(true);
    };

    // Handle form element change
    const handleFormElementChange = (section, fieldPath, value) => {
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
    };

    const submitHandler = async () => {
        const pdfBlob = await pdf(<PdfDoc data={regForm} />).toBlob();
        const data = {
            id: null,
            patientId: "",
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
                address: { ...regForm.personal.address, id: null },
            },
            guarantor: {
                ...regForm.guarantor,
                id: null,
                address: { ...regForm.guarantor.address, id: null },
            },
            parentGuardian: {
                ...regForm.parent,
                id: null,
                address: { ...regForm.parent.address, id: null },
            },
            emergency: {
                ...regForm.emergency,
                id: null,
                address: { ...regForm.emergency.address, id: null },
            },
            paymentStructure: {
                paymentMode: regForm.insurance.paymentMode,
                insurances: [
                    {
                        ...regForm.insurance.primaryInsurance,
                        id: null,
                        primary: true,
                        insuranceProvider: {
                            ...regForm.insurance.primaryInsurance
                                .insuranceProvider,
                            address: {
                                id: null,
                                ...regForm.insurance.primaryInsurance
                                    .insuranceProvider.address,
                            },
                        },
                    },
                    {
                        ...regForm.insurance.secondaryInsurance,
                        id: null,
                        primary: false,
                        insuranceProvider: {
                            ...regForm.insurance.secondaryInsurance
                                .insuranceProvider,
                            address: {
                                id: null,
                                ...regForm.insurance.secondaryInsurance
                                    .insuranceProvider.address,
                            },
                        },
                    },
                ],
            },
            date: regForm.consent.date,
            patientRegForm: "",
            file: pdfBlob,
        };

        const formData = objectToFormData(data);

        for (const pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        // TODO: Create patient
        mutate(formData)
    };

    // console.log(regForm);
    // console.log(consents);

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
        ];

        if (step === 1) {
            const dataObj = regForm.personal;

            for (const key in dataObj) {
                const value = dataObj[key];

                if (!requiredFields.includes(key)) {
                    continue;
                }

                if (value !== null && typeof value === "object") {
                    for (const key in value) {
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

        // if (step === 2) {
        //     return true;
        // }

        // if (step === 3) {
        //     return true;
        // }

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
                formData={regForm}
                formSize="md"
                optionalFields={[]}
                isStepValid={isStepValid}
                stepForms={formSteps.forms}
                steps={formSteps.steps}
                submitHandler={submitHandler}
                isSuccessModalOpen={isSuccessModalOpen}
                successModalData={successModalData}
                isSubmitting={isPending}
            />
        </div>
    );
};

export default PatientRegistrationForm;
