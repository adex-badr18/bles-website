import { useState, useEffect } from "react";
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
        consent: { signature: "", date: "" },
    });
    console.log(formData);
    console.log(consents);

    useEffect(() => {
        if (formData.primaryCarePhysician.havePcp.toLowerCase() === "no") {
            setConsents((prev) => ({
                ...prev,
                pcpAuth: false,
                infoToRelease: false,
            }));

            setFormData((prev) => ({
                ...prev,
                primaryCarePhysician: {
                    ...prev.primaryCarePhysician,
                    name: "",
                    phone: "",
                    fax: "",
                    infoToRelease: "",
                    address: {
                        ...prev.primaryCarePhysician.address,
                        streetName: "",
                        city: "",
                        state: "",
                        zipCode: "",
                    },
                },
            }));
        }
    }, [formData.primaryCarePhysician.havePcp]);

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

    const isStepValid = (step) => {
        const requiredFields = [
            "firstName",
            "lastName",
            "gender",
            "dob",
            "maritalStatus",
            "phone",
            "email",
            "address",
            "havePcp",
        ];

        if (step === 1) {
            const dataObj = formData.verification;

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

        if (step === 2) {
            return true;
        }

        if (step === 3) {
            if (!formData.primaryCarePhysician.havePcp) {
                return false;
            }

            for (const key in consents) {
                const value = consents[key];
                if (
                    (key === "finResponsibility" ||
                        key === "treatmentConsent") &&
                    !value
                ) {
                    return false;
                }
            }

            if (formData.primaryCarePhysician.havePcp.toLowerCase() === "yes") {
                const dataObj = formData.primaryCarePhysician;
                const pcpRequiredFields = [
                    "name",
                    "phone",
                    "address",
                    "infoToRelease",
                ];

                for (const key in dataObj) {
                    const value = dataObj[key];

                    if (!pcpRequiredFields.includes(key)) {
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

                for (const key in consents) {
                    const value = consents[key];
                    if (
                        (key === "pcpAuth" || key === "infoToRelease") &&
                        !value
                    ) {
                        return false;
                    }
                }
            }

            if (!formData.consent.signature) {
                return false;
            }

            return true;
        }
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
                isStepValid={isStepValid}
            />
        </div>
    );
};

export default InitialEvaluationForm;
