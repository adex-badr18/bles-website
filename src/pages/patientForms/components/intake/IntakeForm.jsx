import { useState } from "react";
import MultiStepForm from "../../../../components/MultiStepForm";
import PdfPreview from "../../../../components/PdfPreview";
import PdfDoc from "./PdfDoc";
import VerificationStep from "../../../../components/VerificationStep";
import PsychHistory from "./PsychHistory";
import AlcoholHistory from "./AlcoholHistory";
import PsychoSocial from "./PsychoSocial";
import OtherHistory from "./OtherHistory";
import IntroForm from "./IntroForm";

const IntakeForm = () => {
    const [formData, setFormData] = useState({
        verification: {
            id: "",
            date: new Date(),
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            phone: "",
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
            "Intro",
            "Psychiatric",
            "Alcohol/Drug",
            "Psychosocial",
            "Others",
            "Preview",
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
            {
                id: 7,
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

export default IntakeForm;
