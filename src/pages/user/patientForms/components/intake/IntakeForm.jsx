import { useState } from "react";
import MultiStepForm from "../../../../../components/MultiStepForm";
import PdfPreview from "../../../../../components/PdfPreview";
import PdfDoc from "./PdfDoc";
import VerificationStep from "../../../../../components/VerificationStep";
import PsychHistory from "./PsychHistory";
import AlcoholHistory from "./AlcoholHistory";
import PsychoSocial from "./PsychoSocial";
import OtherHistory from "./OtherHistory";
import IntroForm from "./IntroForm";
import Preview from "./Preview";

const IntakeForm = () => {
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
        intro: {
            doYouShareHome: "",
            complaints: "",
            sexPreference: "",
            onProbation: "",
            inLawsuit: "",
            childrenCount: 0,
            marriageCount: 0,
            pastMarriagesInfo: [
                { MarriageDescription: "", duration: "", divorceReason: "" },
            ],
        },
        psychHistory: {
            pastProviders: [],
            currentMedications: [],
            hasAttemptedSuicide: "",
            isPsychHospitalized: "",
            pastMedications: [],
        },
        alcoholDrugHistory: {
            alcohol: {
                usageFrequency: "",
                brand: "",
                lastUsed: "",
                drinkGuiltCheck: "",
            },
            substanceUsages: [
                {
                    substanceName: "",
                    ageAtFirstUse: "",
                    qtyUse: "",
                    usageFrequency: "",
                    lastUsed: "",
                },
            ],
            weeklyAverageSpending: 0,
            pastTreatmentInfo: [
                {
                    facility: "",
                    date: new Date(),
                    drugTreated: "",
                    isTreatmentCompleted: "",
                },
            ],
            isPastStepRecoveryParticipant: "",
            isCurrentStepRecoveryParticipant: "",
        },
        psychosocialHistory: {
            birthPlace: "",
            growthPlace: "",
            raisedBy: "",
            siblingsCount: 0,
            childhoodInfo: "",
            wasPhysicallyAbused: "",
            wasEmotionallyAbused: "",
            wasSexuallyAbused: "",
        },
        otherHistory: {
            hasMedicalDisability: "",
            pastMedicalHistory: [],
            pastSurgicalHistory: [],
            allergies: [],
            relativesWithMentalIllnessOrSuicide: [],
            otherUsefulInfo: "",
        },
    });

    // console.log(formData);

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

        if (!formData.intro.complaints) {
            return false;
        }

        return true;
    };

    const formSteps = {
        steps: [
            "Verification",
            "Intro",
            "Psychiatric",
            "Alcohol/Drug",
            "Psychosocial",
            "Others",
            // "Preview",
        ],
        forms: [
            {
                id: 1,
                name: "Verification",
                component: (
                    <VerificationStep
                        key={1}
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 2,
                name: "Intro",
                component: (
                    <IntroForm
                        key={2}
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 3,
                name: "Psychiatric History",
                component: (
                    <PsychHistory
                        key={3}
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 4,
                name: "Drugs & Alcohol",
                component: (
                    <AlcoholHistory
                        key={4}
                        onChange={handleFormElementChange}
                        formData={formData}
                    />
                ),
            },
            {
                id: 5,
                name: "Psychosocial",
                component: (
                    <PsychoSocial
                        key={5}
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 6,
                name: "Other History",
                component: (
                    <OtherHistory
                        key={6}
                        formData={formData}
                        onChange={handleFormElementChange}
                    />
                ),
            },
            // {
            //     id: 7,
            //     name: "Preview",
            //     component: <Preview key={7} formData={formData} />,
            // },
            // {
            //     id: 7,
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
                isStepValid={isStepValid}
            />
        </div>
    );
};

export default IntakeForm;
