import { useState } from "react";
import PdfDoc from "./PdfDoc";
import PdfPreview from "../../../../../components/PdfPreview";
import VerificationStep from "../../../../../components/VerificationStep";
import MultiStepForm from "../../../../../components/MultiStepForm";
import Consents from "./Consents";

const TreatmentConsentForm = () => {
    const [consent, setConsent] = useState(false);
    const [formData, setFormData] = useState({
        verification: {
            id: "",
            verificationStatus: "",
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            dob: "",
            phone: "",
            email: "",
            street: "",
            city: "",
            state: "",
            zipCode: "",
        },
        consent: {
            patientName: "",
            patientSignature: "",
            patientSignDate: "",
            isMinor: "",
            guardianName: "James Isabella",
            guardianSignature: "",
            patientGuardianRelationship: "Father",
            guardianSignDate: "",
        },
    });

    // Handle form element change
    const handleFormElementChange = (section, fieldPath, value) => {
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
    };

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    const formSteps = {
        steps: ["Verification", "Consents", "Preview"],
        forms: [
            {
                id: 1,
                name: "Verification",
                component: (
                    <VerificationStep
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 2,
                name: "Consents",
                component: (
                    <Consents
                        formData={formData}
                        onChange={handleFormElementChange}
                        // setFormData={setFormData}
                        consent={consent}
                        setConsent={setConsent}
                    />
                ),
            },
            {
                id: 3,
                name: "Preview",
                component: <PdfPreview Doc={<PdfDoc data={formData} />} />,
            },
        ],
    };

    return (
        <div>
            <MultiStepForm
                formData={formData}
                formSize="md"
                optionalFields={[]}
                stepForms={formSteps.forms}
                steps={formSteps.steps}
                submitHandler={submitHandler}
            />
        </div>
    );
};

export default TreatmentConsentForm;
