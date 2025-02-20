import { useState } from "react";
import Pharmacy from "./Pharmacy";
import Agreements from "./Agreements";
import VerificationStep from "../../../../../components/VerificationStep";
import MultiStepForm from "../../../../../components/MultiStepForm";
import PdfPreview from "../../../../../components/PdfPreview";
import PdfDoc from "./PdfDoc";

const InitialEvaluationForm = () => {
    const [consents, setConsents] = useState({
        finResponsibility: false,
        treatmentConsent: false,
        pcpAuth: false,
        infoToRelease: false,
    });
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
        pharmacy: {
            name: "",
            phone: "",
            address: { streetName: "", city: "", state: "", zipCode: "" },
        },
        primaryCarePhysician: {
            havePcp: "",
            name: "",
            phone: "",
            fax: "",
            address: { streetName: "", city: "", state: "", zipCode: "" },
            infoToRelease: "",
        },
        consent: {signature: "", date: ""}
    });
    console.log(formData)
    console.log(consents)

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
        steps: ["Verification", "Pharmacy", "Agreements", "Preview"],
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
                name: "Pharmacy Info.",
                component: (
                    <Pharmacy
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 3,
                name: "Agreements",
                component: (
                    <Agreements
                        formData={formData}
                        onChange={handleFormElementChange}
                        consents={consents}
                        setConsents={setConsents}
                    />
                ),
            },
            {
                id: 4,
                name: "Preview",
                component: (
                    <PdfPreview key={7} Doc={<PdfDoc data={formData} />} />
                ),
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

export default InitialEvaluationForm;
