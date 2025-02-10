import { useState } from "react";
import MultiStepForm from "../../../../../components/MultiStepForm";
import VerificationStep from "../../../../../components/VerificationStep";
import ScreeningStep from "./ScreeningStep";
import Referral from "./Referral";
import PdfDoc from "./PdfDoc";
import PdfPreview from "../../../../../components/PdfPreview";

const ScreeningForm = () => {
    const [formData, setFormData] = useState({
        verification: {
            id: "",
            date: "",
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            phone: "",
        },
        screening: {
            mhBhPhone: "",
            helpNeeds: "",
            inCrisis: "",
            currentlyOnPsychMed: "",
            stableOnMed: "",
            isPsychiatristConsult: "",
            isTherapistConsult: "",
            anyMentalHealthTreatment: "",
            suicideAttemptHistory: "",
            harmToSelfOrOthers: "",
            intent: "",
            healthSymptoms: "",
            healthSymptomsFrequency: "",
        },
        referral: {
            source: "",
            therapist: "",
            firstName: "",
            middleName: "",
            lastName: "",
            phone: "",
            address: { streetName: "", city: "", state: "", zipCode: "" },
        },
    });

    console.log(formData);

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
        steps: [
            "Verification",
            "Screening",
            "Referral",
            // "Preview"
        ],
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
                name: "Screening",
                component: (
                    <ScreeningStep
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 3,
                name: "Referral",
                component: (
                    <Referral
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            // {
            //     id: 4,
            //     name: "Preview",
            //     component: (
            //         <PdfPreview key={7} Doc={<PdfDoc data={formData} />} />
            //     ),
            // },
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

export default ScreeningForm;
