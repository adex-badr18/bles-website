import { useState } from "react";
import VerificationStep from "../../../../../components/VerificationStep";
import MultiStepForm from "../../../../../components/MultiStepForm";
import Assessment from "./Assessment";
import PdfDoc from "./PdfDoc";
import PdfPreview from "../../../../../components/PdfPreview";

import { useToast } from "../../../../../components/ToastContext";
import { useCreateForm } from "../../../../../hooks/usePatients";
import { objectToFormData } from "../../../../utils";

const AdhdForm = () => {
    const { showToast } = useToast();
    const [successModalData, setSuccessModalData] = useState({});
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const { mutate, isPending, error, data } = useCreateForm({
        onSuccess: (response) => {
            setSuccessModalData(response?.data);
            setIsSuccessModalOpen(true);
        },
        onError: (error) => {
            showToast({
                message: error?.message || `Failed to submit form!`,
                type: "error",
                duration: 5000,
            });
        },
    });
    const [formData, setFormData] = useState({
        verification: {
            patientId: "",
            firstName: "",
            middleName: "",
            lastName: "",
            gender: "",
            dob: "",
            phone: "",
            email: "",
            address: {
                id: null,
                streetName: "",
                city: "",
                state: "",
                zipCode: "",
            },
        },
        partA: {
            projectCompletionProblem: {
                question:
                    "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
                answer: "",
            },
            organizationRate: {
                question:
                    "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
                answer: "",
            },
            memoryRate: {
                question:
                    "How often do you have problems remembering appointments or obligations?",
                answer: "",
            },
            attitudeToChallenge: {
                question:
                    "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
                answer: "",
            },
            fidgetRateOnsit: {
                question:
                    "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
                answer: "",
            },
            activeToWork: {
                question:
                    "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
                answer: "",
            },
        },
        partB: {
            carelessMistakes: {
                question:
                    "How often do you make careless mistakes when you have to work on a boring or difficult project?",
                answer: "",
            },
            attentionToBoringWork: {
                question:
                    "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
                answer: "",
            },
            concentrationRate: {
                question:
                    "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
                answer: "",
            },
            misplaceRate: {
                question:
                    "How often do you misplace or have difficulty finding things at home or at work?",
                answer: "",
            },
            distractionRate: {
                question:
                    "How often are you distracted by activity or noise around you?",
                answer: "",
            },
            excuseRate: {
                question:
                    "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
                answer: "",
            },
            restlessRate: {
                question: "How often do you feel restless or fidgety?",
                answer: "",
            },
            troubleRelaxing: {
                question:
                    "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
                answer: "",
            },
            excessiveTalks: {
                question:
                    "How often do you find yourself talking too much when you are in social situations?",
                answer: "",
            },
            peopleSentenceCompletion: {
                question:
                    "When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?",
                answer: "",
            },
            patienceOnQueue: {
                question:
                    "How often do you have difficulty waiting your turn in situations when turn taking is required?",
                answer: "",
            },
            interruptOthers: {
                question:
                    "How often do you interrupt others when they are busy?",
                answer: "",
            },
        },
    });

    // console.log(formData.verification)

    // Compute totalScore
    // const totalScore = Object.values(formData.assessment).reduce(
    //     (total, item) => {
    //         return total + Number(item.answer ?? 0);
    //     },
    //     0
    // );

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

    const submitHandler = async (e) => {
        e.preventDefault();

        // prepare data
        const data = {
            id: null,
            patientId: formData.verification.patientId,
            projectCompletionProblem:
                formData.partA.projectCompletionProblem.answer,
            organizationRate: formData.partA.organizationRate.answer,
            memoryRate: formData.partA.memoryRate.answer,
            attitudeToChallenge: formData.partA.attitudeToChallenge.answer,
            fidgetRateOnsit: formData.partA.fidgetRateOnsit.answer,
            activeToWork: formData.partA.activeToWork.answer,
            carelessMistakes: formData.partB.carelessMistakes.answer,
            attentionToBoringWork: formData.partB.attentionToBoringWork.answer,
            concentrationRate: formData.partB.concentrationRate.answer,
            misplaceRate: formData.partB.misplaceRate.answer,
            distractionRate: formData.partB.distractionRate.answer,
            excuseRate: formData.partB.excuseRate.answer,
            restlessRate: formData.partB.restlessRate.answer,
            troubleRelaxing: formData.partB.troubleRelaxing.answer,
            excessiveTalks: formData.partB.excessiveTalks.answer,
            peopleSentenceCompletion:
                formData.partB.peopleSentenceCompletion.answer,
            patienceOnQueue: formData.partB.patienceOnQueue.answer,
            interruptOthers: formData.partB.interruptOthers.answer,
        };

        const payload = objectToFormData(data);

        mutate({ payload, endpoint: "/patients/forms/adhd" });
    };

    const isStepValid = (step) => {
        const requiredFields = [
            "firstName",
            "lastName",
            "gender",
            // "dob",
            "maritalStatus",
            "phone",
            "email",
            "address",
            "patientId",
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
            const dataObj = { ...formData.partA, ...formData.partB };

            for (const key in dataObj) {
                const value = dataObj[key].answer;

                if (value === "" || value === null || value === undefined) {
                    return false;
                }
            }

            return true;
        }
    };

    const formSteps = {
        steps: ["Verification", "Assessment", "Preview"],
        forms: [
            {
                id: 1,
                name: "Verification",
                component: (
                    <VerificationStep
                        formData={formData}
                        setFormData={setFormData}
                    />
                ),
            },
            {
                id: 2,
                name: "Assessment",
                component: (
                    <Assessment
                        formData={formData}
                        onChange={handleFormElementChange}
                        // totalScore={totalScore}
                    />
                ),
            },
            {
                id: 3,
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
                formSize="md"
                isStepValid={isStepValid}
                stepForms={formSteps.forms}
                steps={formSteps.steps}
                submitHandler={submitHandler}
                isSuccessModalOpen={isSuccessModalOpen}
                setIsSuccessModalOpen={setIsSuccessModalOpen}
                successModalData={successModalData}
                isSubmitting={isPending}
            />
        </div>
    );
};

export default AdhdForm;
