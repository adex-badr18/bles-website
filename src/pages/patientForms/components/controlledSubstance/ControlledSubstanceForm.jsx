import { useState } from "react";
import MultiStepForm from "../../../../components/MultiStepForm";
import VerificationStep from "../../../../components/VerificationStep";
import PdfPreview from "../../../../components/PdfPreview";
import PdfDoc from "./PdfDoc";
import Consents from "./Consents";

const ControlledSubstanceForm = () => {
    const [consent, setConsent] = useState(false);
    const [formData, setFormData] = useState({
        verification: {
            id: "",
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            phone: "",
            dob: "",
            address: { streetName: "", city: "", state: "", zipCode: "" },
        },
        consent: {
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

export default ControlledSubstanceForm;
