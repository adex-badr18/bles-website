export const consents = [
    {
        id: 1,
        title: "Education and Explanation",
        consent:
            "I confirm that I have received comprehensive education regarding my prescribed controlled substances, including:",
        lists: [
            {
                id: 1,
                title: "Indications & Directions",
                descr: "The specific reasons for use, proper dosage, timing, and administration instructions.",
            },
            {
                id: 2,
                title: "Potential Side Effects",
                descr: "Common and serious side effects, including the risk of dependency, sedation, or impaired cognitive and motor functions.",
            },
            {
                id: 3,
                title: "Alternatives",
                descr: "A discussion of alternative treatment options and the relative risks and benefits of using controlled substances.",
            },
            {
                id: 4,
                title: "Regulatory Considerations",
                descr: "An explanation that controlled substances are subject to strict monitoring and may be reported to regulatory agencies.",
            },
        ],
    },
    {
        id: 2,
        title: "Risks and Patient Responsibilities",
        consent:
            "I understand that the use of controlled substances carries inherent risks, including but not limited to:",
        secConsent:
            "I agree to use the medications strictly as directed by my healthcare provider and to report any side effects or concerns immediately. I also acknowledge my responsibility to safeguard these medications and to store them securely to prevent unauthorized access or misuse.",
        lists: [
            {
                id: 1,
                title: "Dependency and Abuse",
                descr: "The potential for developing physical or psychological dependence, misuse, or addiction.",
            },
            {
                id: 2,
                title: "Impaired Functioning",
                descr: "The possibility of sedation, cognitive impairment, or motor skill impairment, which may affect my ability to operate machinery or perform tasks safely.",
            },
            {
                id: 3,
                title: "Legal and Regulatory Implications",
                descr: "Non-compliance with prescribed usage may have legal consequences, and misuse of these medications may result in disciplinary actions by regulatory bodies.",
            },
        ],
    },
    {
        id: 3,
        title: "Prohibited Substance Use",
        consent: "By signing this form, I confirm that I:",
        secConsent:
            "I understand that this consent is voluntary and that I have had the opportunity to ask questions regarding the use of controlled substances. I acknowledge that if I do not comply with these terms, my treatment may be modified, discontinued, or reported to appropriate regulatory agencies as required by law.",
        lists: [
            {
                id: 1,
                title: "",
                descr: "Have received and understand all the information provided regarding the use of controlled substances.",
            },
            {
                id: 2,
                title: "",
                descr: "Acknowledge the risks, including dependency and adverse effects, and agree to adhere to the prescribed treatment plan.",
            },
            {
                id: 3,
                title: "",
                descr: "Understand that I am responsible for using these medications responsibly and for following all clinic guidelines and legal requirements.",
            },
            {
                id: 4,
                title: "",
                descr: "Agree to communicate openly with my provider about any issues or changes in my condition that may affect my treatment.",
            },
        ],
    },
];
