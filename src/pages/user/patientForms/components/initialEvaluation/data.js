export const consentOptions = {
    finRes: {
        title: "Financial Responsibility",
        name: "finResponsibility",
        label: "understand and agree that I am responsible for the fees to Brightlife Enhancement Services before services are rendered.",
        value: false,
    },
    pcpAuth: {
        title: "Primary Care Provider Authorization",
        name: "pcpAuth",
        label: "may revoke this authorization at any time except to the extent that action has been taken in reliance upon it. If I do not revoke this authorization, it will expire one (1) year after I have terminated treatment.",
        value: false,
    },
    treatmentConsent: {
        title: "Informed Consent for Treatment",
        name: "treatmentConsent",
        label: "agree and consent to participate in behavioral healthcare services offered and provided by BrightLife Enhancement Services, a behavioral health care provider. I understand that I am consenting and agreeing only to those services that the above-named provider is qualified to provide within: (1) the scope of the provider's license, certification, and training; or (2) within scope of license, certification, and training of the behavioral health care provider directly supervising the services received by the patient.",
        value: false,
    },
};

export const pcpAuthOptions = [
    {
        id: 1,
        name: "mentalInfo",
        label: "release any applicable mental health information to my Primary Care Physician (PCP) above",
        text: "release any applicable mental health information to my primary care physician (PCP) above",
        value: "release any applicable mental health information to my primary care physician (PCP) above",
    },
    {
        id: 2,
        name: "substanceAbuseInfo",
        label: "release any applicable substance abuse information to my PCP named above",
        text: "release any applicable substance abuse information to my PCP named above",
        value: "release any applicable substance abuse information to my PCP named above",
    },
    {
        id: 3,
        name: "medicalInfo",
        label: "release only medical information to my PCP named above",
        text: "release only medical information to my PCP named above",
        value: "release only medical information to my PCP named above",
    },
    {
        id: 4,
        name: "noInfo",
        label: "not release any information to my PCP named above",
        text: "not release any information to my PCP named above",
        value: "not release any information to my PCP named above",
    },
    // {
    //     id: 5,
    //     name: "mentalInfo",
    //     label: "I do not have a PCP at this time",
    //     text: "I do not have a PCP at this time",
    // },
];
