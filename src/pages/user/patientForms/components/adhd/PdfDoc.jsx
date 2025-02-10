import { Document, View, Text, Page } from "@react-pdf/renderer";
import LetterHead from "../LetterHead";
import {
    adhdOptions,
    adhdHistory,
    adhdImpairments,
    adhdSymptoms,
    researchers,
} from "./data";
import { styles } from "../patientReg/PdfDoc";

const PdfDoc = ({ data, totalScore }) => {
    const adhdAssessmentData = {
        verification: {
            id: { title: "Patient ID:", value: data.verification.id },
            fullName: {
                title: "Patient's Name:",
                value: `${data.verification.firstName} ${data.verification.middleName} ${data.verification.lastName}`,
            },
            email: { title: "Email:", value: data.verification.email },
            phone: { title: "Phone:", value: data.verification.phone },
            dob: {
                title: "Date of Birth:",
                value: data.verification.dob.toLocaleDateString() || "N/A",
            },
            streetAddress: {
                title: "Street Address:",
                value: data.verification.address.streetName,
            },
            city: { title: "City:", value: data.verification.address.city },
            state: { title: "State:", value: data.verification.address.state },
            zipCode: {
                title: "Zip Code:",
                value: data.verification.address.zipCode,
            },
            date: {title: "Date:", value: new Date().toLocaleDateString()}
        },
        partA: data.partA,
        partB: data.partB,
    };

    const { verification, partA, partB } = adhdAssessmentData;

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.wrapper}>
                    <LetterHead />

                    {/* Form Title */}
                    <Text style={styles.header}>
                        Adult ADHD Self-Report Scale (ASRS-v1.1) Symptom
                        Checklist
                    </Text>

                    {/* Patient Personal Info */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Patient Information
                        </Text>
                        <View style={styles.row}>
                            {Object.entries(verification).map(([key, val]) => (
                                <View key={key} style={styles.fieldItem}>
                                    <Text style={styles.key}>{val.title}</Text>
                                    <Text style={styles.value}>
                                        {val.value || "N/A"}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>Assessment</Text>

                        <Text style={styles.consentDescr}>
                            Description: The Symptom Checklist is an instrument
                            consisting of the eighteen DSM-IV-TR criteria. Six
                            of the eighteen questions were found to be the most
                            predictive of symptoms consistent with ADHD. These
                            six questions are the basis for the ASRS v1.1
                            Screener and are also Part A of the Symptom
                            Checklist. Part B of the Symptom Checklist contains
                            the remaining twelve questions.
                        </Text>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}
                        >
                            <Text
                                style={{
                                    color: "#E12454",
                                    ...styles.consentDescr,
                                }}
                            >
                                Instructions:
                            </Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2",
                            }}
                        >
                            <Text style={styles.consentDescr}>Symptoms:</Text>
                            {adhdSymptoms.map((symptom) => (
                                <View
                                    key={symptom.id}
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        gap: "8",
                                        marginBottom: "4",
                                    }}
                                >
                                    <View
                                        style={{
                                            width: "8",
                                            height: "8",
                                            borderRadius: "100%",
                                            backgroundColor: "#223645",
                                            flexShrink: "0",
                                            marginTop: "3",
                                        }}
                                    ></View>
                                    <Text style={styles.consentLabel}>
                                        {symptom.descr}
                                    </Text>
                                </View>
                            ))}
                        </View>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2",
                            }}
                        >
                            <Text style={styles.consentDescr}>
                                Impairments:
                            </Text>
                            {adhdImpairments.map((impairment) => (
                                <View
                                    key={impairment.id}
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        gap: "8",
                                        marginBottom: "4",
                                    }}
                                >
                                    <View
                                        style={{
                                            width: "8",
                                            height: "8",
                                            borderRadius: "100%",
                                            backgroundColor: "#223645",
                                            flexShrink: "0",
                                            marginTop: "3",
                                        }}
                                    ></View>
                                    <Text style={styles.consentLabel}>
                                        {impairment.descr}
                                    </Text>
                                </View>
                            ))}
                        </View>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2",
                            }}
                        >
                            <Text style={styles.consentDescr}>History:</Text>
                            {adhdHistory.map((history) => (
                                <View
                                    key={history.id}
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        gap: "8",
                                        marginBottom: "4",
                                    }}
                                >
                                    <View
                                        style={{
                                            width: "8",
                                            height: "8",
                                            borderRadius: "100%",
                                            backgroundColor: "#223645",
                                            flexShrink: "0",
                                            marginTop: "3",
                                        }}
                                    ></View>
                                    <Text style={styles.consentLabel}>
                                        {history.descr}
                                    </Text>
                                </View>
                            ))}
                        </View>

                        <Text
                            style={{ ...styles.consentDescr, marginTop: "16" }}
                        >
                            Please answer the questions below. As you answer
                            each question, check the option that best describes
                            how you have felt and conducted yourself over the
                            past 6 months. Please give this completed checklist
                            to your healthcare professional to discuss during
                            today’s appointment.
                        </Text>

                        <View
                            style={{
                                marginTop: "20",
                                display: "flex",
                                flexDirection: "column",
                                gap: "16",
                            }}
                        >
                            {Object.entries(partA).map(
                                ([key, value], index) => (
                                    <View
                                        key={key}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "12",
                                        }}
                                    >
                                        <Text>{`${index + 1}. ${
                                            value.question
                                        }`}</Text>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                                rowGap: 8,
                                                columnGap: 5,
                                            }}
                                        >
                                            {adhdOptions.map((option) => (
                                                <View
                                                    key={option.id}
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        gap: "8",
                                                        width: "45%",
                                                    }}
                                                >
                                                    <View
                                                        style={{
                                                            width: "14",
                                                            height: "14",
                                                            borderRadius:
                                                                "100%",
                                                            border: "2px solid #223645",
                                                            backgroundColor: `${
                                                                partA[key]
                                                                    .answer ===
                                                                option.value
                                                                    ? "#223645"
                                                                    : ""
                                                            }`,
                                                            flexShrink: "0",
                                                        }}
                                                    ></View>
                                                    <Text>{option.text}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    </View>
                                )
                            )}
                        </View>

                        <View
                            style={{
                                marginTop: "20",
                                display: "flex",
                                flexDirection: "column",
                                gap: "16",
                            }}
                        >
                            {Object.entries(partB).map(
                                ([key, value], index) => (
                                    <View
                                        key={key}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "12",
                                        }}
                                    >
                                        <Text>{`${index + 1}. ${
                                            value.question
                                        }`}</Text>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                                rowGap: 8,
                                                columnGap: 5,
                                            }}
                                        >
                                            {adhdOptions.map((option) => (
                                                <View
                                                    key={option.id}
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        gap: "8",
                                                        width: "45%",
                                                    }}
                                                >
                                                    <View
                                                        style={{
                                                            width: "14",
                                                            height: "14",
                                                            borderRadius:
                                                                "100%",
                                                            border: "2px solid #223645",
                                                            backgroundColor: `${
                                                                partB[key]
                                                                    .answer ===
                                                                option.value
                                                                    ? "#223645"
                                                                    : ""
                                                            }`,
                                                            flexShrink: "0",
                                                        }}
                                                    ></View>
                                                    <Text>{option.text}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    </View>
                                )
                            )}
                        </View>
                    </View>
                </View>
            </Page>

            <Page style={styles.page}>
                <View style={styles.wrapper}>
                    <View
                        style={{
                            marginTop: "16",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12",
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 14,
                                textTransform: "uppercase",
                            }}
                        >
                            The Value of Screening for Adults With ADHD
                        </Text>

                        <Text style={styles.consentDescr}>
                            Research suggests that the symptoms of ADHD can
                            persist into adulthood, having a significant impact
                            on the relationships, careers, and even the personal
                            safety of your patients who may suffer from it.1-4
                            Because this disorder is often misunderstood, many
                            people who have it do not receive appropriate
                            treatment and, as a result, may never reach their
                            full potential. Part of the problem is that it can
                            be difficult to diagnose, particularly in adults.
                        </Text>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2",
                            }}
                        >
                            <Text style={styles.consentDescr}>
                                The Adult ADHD Self-Report Scale (ASRS-v1.1)
                                Symptom Checklist was developed in conjunction
                                with the World Health Organization (WHO), and
                                the Workgroup on Adult ADHD that included the
                                following team of psychiatrists and researchers:
                            </Text>

                            {researchers.map((researcher) => (
                                <View
                                    key={researcher.id}
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        gap: "8", marginBottom: "4"
                                    }}
                                >
                                    <View
                                        style={{
                                            width: "8",
                                            height: "8",
                                            borderRadius: "100%",
                                            backgroundColor: "#223645",
                                            flexShrink: "0", marginTop: "3"
                                        }}
                                    ></View>

                                    <View
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "1",
                                        }}
                                    >
                                        <Text>{researcher.name}</Text>
                                        <Text>{researcher.edu}</Text>
                                        <Text>{researcher.school}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>

                        <Text style={styles.consentDescr}>
                            As a healthcare professional, you can use the ASRS
                            v1.1 as a tool to help screen for ADHD in adult
                            patients. Insights gained through this screening may
                            suggest the need for a more in-depth clinician
                            interview. The questions in the ASRS v1.1 are
                            consistent with DSM-IV criteria and address the
                            manifestations of ADHD symptoms in adults. Content
                            of the questionnaire also reflects the importance
                            that DSM-IV places on symptoms, impairments, and
                            history for a correct diagnosis.
                        </Text>

                        <Text style={styles.consentDescr}>
                            The checklist takes about 5 minutes to complete and
                            can provide information that is critical to
                            supplement the diagnostic process.
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PdfDoc;
