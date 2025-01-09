import PatientRegistrationForm from "../patientForms/components/PatientRegistrationForm";
import AdhdForm from "../patientForms/components/AdhdForm";
import AnxietyDisorderForm from "../patientForms/components/AnxietyDisorderForm";
import ControlledSubstanceForm from "../patientForms/components/ControlledSubstanceForm";
import DepressionAssessmentForm from "../patientForms/components/DepressionAssessmentForm";
import InitialEvaluationForm from "../patientForms/components/InitialEvaluationForm";
import IntakeForm from "../patientForms/components/IntakeForm";
import MedicationConsentForm from "../patientForms/components/MedicationConsentForm";
import MoodDisorderForm from "../patientForms/components/MoodDisorderForm";
import NoticeOfPrivacy from "../patientForms/components/NoticeOfPrivacy";
import PatientInfoConsent from "../patientForms/components/PatientInfoConsent";
import ReleaseReceive from "../patientForms/components/ReleaseReceive";
import ScreeningForm from "../patientForms/components/ScreeningForm";
import SelfPayAgreement from "../patientForms/components/SelfPayAgreement";
import TerminationPolicy from "../patientForms/components/TerminationPolicy";
import TreatmentConsentForm from "../patientForms/components/TreatmentConsentForm";

export const dataCollectionForms = [
    {
        id: 1,
        slug: "patient-registration-form",
        title: "Patient Registration Form",
        description:
            "This form helps us gather essential details about you, such as contact information and medical history, to ensure a smooth onboarding process.",
        link: "/forms/patient-registration-form",
        component: <PatientRegistrationForm />,
    },
    {
        id: 2,
        slug: "intake-form",
        title: "Intake Form",
        description:
            "A comprehensive form designed to understand your concerns and set the foundation for your personalized treatment plan.",
        link: "/forms/intake-form",
        component: <IntakeForm />,
    },
    {
        id: 3,
        slug: "screening-form",
        title: "Screening Form",
        description:
            "Used to identify specific behavioral health needs, this form allows our specialists to provide targeted care.",
        link: "/forms/screening-form",
        component: <ScreeningForm />,
    },
    {
        id: 4,
        slug: "initial-evaluation-form",
        title: "Initial Evaluation Form",
        description:
            "This form helps us gain deeper insights into your health background, symptoms, and goals for effective treatment.",
        link: "/forms/initial-evaluation-form",
        component: <InitialEvaluationForm />,
    },
    {
        id: 5,
        slug: "depression-assessment-form",
        title: "PHQ-9 Depression Assessment Form",
        description:
            "This form screens for depression and measures its severity, guiding tailored treatment decisions.",
        link: "/forms/depression-assessment-form",
        component: <DepressionAssessmentForm />,
    },
    {
        id: 6,
        slug: "generalized-anxiety-disorder-form",
        title: "Generalized Anxiety Disorder 7-item (GAD-7) Scale",
        description:
            "This quick screening tool assesses anxiety symptoms to create a focused care plan for managing stress.",
        link: "/forms/generalized-anxiety-disorder-form",
        component: <AnxietyDisorderForm />,
    },
    {
        id: 7,
        slug: "mood-disorder-form",
        title: "Mood Disorder Questionnaire Screening",
        description:
        "This form helps identify mood disorders like bipolar disorder, offering key insights into your emotional health.",
        link: "/forms/mood-disorder-form",
        component: <MoodDisorderForm />,
    },
    {
        id: 8,
        slug: "adhd-form",
        title: "Adult ADHD Self-Report Scale (ASRS-V I. I) Symptom Checklist",
        description:
            "A self-assessment tool to evaluate ADHD symptoms and guide diagnostic and treatment steps.",
        link: "/forms/adhd-form",
        component: <AdhdForm />,
    },
];

export const signatureForms = [
    {
        id: 1,
        slug: "medication-consent-form",
        title: "Medication Consent Form",
        description:
            "This ensures you understand and agree to the prescribed medications, fostering safe and informed care.",
        link: "/forms/medication-consent-form",
        component: <MedicationConsentForm />,
    },
    {
        id: 2,
        slug: "controlled-substance-form",
        title: "Controlled Substance Form",
        description:
            "Required for regulated medications, this form emphasizes accountability and proper usage in your treatment.",
        link: "/forms/controlled-substance-form",
        component: <ControlledSubstanceForm />,
    },
    {
        id: 3,
        slug: "notice-of-privacy-practices",
        title: "Notice of Privacy Practices",
        description:
            "Acknowledges your understanding of how your health information is used and protected in compliance with regulations.",
        link: "/forms/notice-of-privacy-practices",
        component: <NoticeOfPrivacy />,
    },
    {
        id: 4,
        slug: "patient-information-consent-and-financial-policy",
        title: "Patient Information Consent and Financial Policy",
        description:
            "This form outlines consent for information use and agreement to clinic policies for seamless service delivery.",
        link: "/forms/patient-information-consent-and-financial-policy",
        component: <PatientInfoConsent />,
    },
    {
        id: 5,
        slug: "self-pay-agreement",
        title: "Self-Pay Agreement",
        description:
            "Ensures transparency about payment terms for self-funded care, fostering a smooth financial process.",
        link: "/forms/self-pay-agreement",
        component: <SelfPayAgreement />,
    },
];

export const dataCollectionAndSignatureForms = [
    {
        id: 6,
        slug: "release-receive",
        title: "Release Receive",
        description:
            "Authorizes the sharing of relevant medical information with specified individuals or organizations for coordinated care.",
        link: "/forms/release-receive",
        component: <ReleaseReceive />,
    },
    {
        id: 7,
        slug: "termination-policy",
        title: "Termination Policy",
        description:
            "Defines the terms and conditions for discontinuing care to ensure a clear and professional transition.",
        link: "/forms/termination-policy",
        component: <TerminationPolicy />,
    },
    {
        id: 8,
        slug: "telehealth-in-person-treatment-and-medication-education-consent-form",
        title: "Telehealth, In-Person Treatment, and Medication/Education Consent Form",
        description:
            "Combines essential consent for telehealth sessions, in-person care, and treatment education, prioritizing flexibility and transparency.",
        link: "/forms/telehealth-in-person-treatment-and-medication-education-consent-form",
        component: <TreatmentConsentForm />,
    },
];
