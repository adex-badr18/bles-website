import { Document, View, Text, Image, Page } from "@react-pdf/renderer";
import LetterHead from "../LetterHead";
import { anxietyOptions, anxietySummaryOptions } from "./data";
import { styles } from "../patientReg/PdfDoc";

const PdfDoc = ({ data, totalScore }) => {
    const depressionAssessmentData = {
        verification: {
            fullName: {
                title: "Patient's Name:",
                value: `${data.verification.firstName} ${data.verification.middleName} ${data.verification.lastName}`,
            },
            email: { title: "Email:", value: data.verification.email },
            phone: { title: "Phone:", value: data.verification.phone },
            dob: {
                title: "Date of Birth:",
                value: data?.verification?.dob?.toLocaleDateString() || "N/A",
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
        },
        assessment: data.assessment,
        lifeInfluenceSummary: data.lifeInfluenceSummary,
    };

    const { verification, assessment, lifeInfluenceSummary } =
        depressionAssessmentData;
    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.wrapper}>
                    <LetterHead />

                    {/* Form Title */}
                    <Text style={styles.header}>
                        Generalized Anxiety Disorder 7-item (GAD-7) Scale
                    </Text>

                    {/* Patient Personal Info */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Patient Information
                        </Text>

                        <View style={{ ...styles.fieldItem, marginBottom: 20 }}>
                            <Text style={styles.key}>Patient ID</Text>
                            <Text style={styles.value}>
                                {data?.verification?.patientId || "N/A"}
                            </Text>
                        </View>

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
                            The GAD-7 is a screening tool that measures the
                            severity of your anxiety symptoms. Your responses
                            will help us understand your anxiety levels and
                            inform our treatment strategies.
                        </Text>

                        <Text style={styles.consentDescr}>
                            Your total score (ranging from 0 to 21) will
                            indicate the level of anxiety you are experiencing
                            and assist our clinicians to determine the
                            appropriate interventions.
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
                                Instruction:
                            </Text>

                            <Text style={styles.consentDescr}>
                                Please indicate how often, over the past two
                                weeks, you have been bothered by each of the
                                following problems using this scale:
                            </Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2",
                            }}
                        >
                            {anxietyOptions.map((scale) => (
                                <View
                                    key={scale.id}
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: "8",
                                    }}
                                >
                                    <View
                                        style={{
                                            width: "8",
                                            height: "8",
                                            borderRadius: "100%",
                                            backgroundColor: "#223645",
                                            flexShrink: "0",
                                        }}
                                        className="h-2 w-2 rounded-full bg-darkBlue"
                                    ></View>
                                    <Text>{scale.text}</Text>
                                </View>
                            ))}
                        </View>

                        <View
                            style={{
                                marginTop: "16",
                                display: "flex",
                                flexDirection: "column",
                                gap: "16",
                            }}
                        >
                            {Object.entries(assessment).map(
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
                                            {anxietyOptions.map((option) => (
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
                                                                assessment[key]
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
                                display: "flex",
                                flexDirection: "column",
                                gap: "12",
                                marginTop: "16",
                            }}
                        >
                            <Text>{lifeInfluenceSummary.question}</Text>
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    rowGap: 8,
                                    columnGap: 5,
                                }}
                            >
                                {anxietySummaryOptions.map((option) => (
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
                                                borderRadius: "100%",
                                                border: "2px solid #223645",
                                                backgroundColor: `${
                                                    lifeInfluenceSummary.answer ===
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
                                    // marginBottom: 16,
                                    fontSize: 14,
                                    textTransform: "uppercase",
                                }}
                            >
                                Scoring
                            </Text>

                            <Text style={styles.consentDescr}>
                                Scores of 5, 10, and 15 are taken as the cut-off
                                points for mild, moderate and severe anxiety,
                                respectively. When used as a screening tool,
                                further evaluation is recommended when the score
                                is 10 or greater.
                            </Text>

                            <Text style={styles.consentDescr}>
                                Using the threshold score of 10, the GAD-7 has a
                                sensitivity of 89% and a specificity of 82% for
                                GAD. It is moderately good at screening three
                                other common anxiety disorders - panic disorder
                                (sensitivity 74%, specificity 81%), social
                                anxiety disorder (sensitivity 72%, specificity
                                80%) and post-traumatic stress disorder
                                (sensitivity 66%, specificity 81%).
                            </Text>

                            <Text style={{ fontSize: "16" }}>
                                <Text style={{ fontWeight: "bold" }}>
                                    Total Score:
                                </Text>{" "}
                                <Text>{totalScore}</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PdfDoc;
