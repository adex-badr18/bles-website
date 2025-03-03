import { Document, View, Text, Image, Page } from "@react-pdf/renderer";
import LetterHead from "../LetterHead";
import { depressionOptions } from "./data";
import { styles } from "../patientReg/PdfDoc";

const PdfDoc = ({ data, totalScore }) => {
    const depressionAssessmentData = {
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
                value: data.verification.street,
            },
            city: { title: "City:", value: data.verification.city },
            state: { title: "State:", value: data.verification.state },
            zipCode: {
                title: "Zip Code:",
                value: data.verification.zipCode,
            },
        },
        assessment: data.assessment,
    };

    const { verification, assessment } = depressionAssessmentData;
    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.wrapper}>
                    <LetterHead />

                    {/* Form Title */}
                    <Text style={styles.header}>
                        PHQ-9 Depression Assessment Form
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
                            The PHQ-9 is a validated tool used to identify the
                            presence and severity of depressive symptoms. Your
                            honest responses over the past two weeks help us
                            create a personalized treatment plan tailored to
                            your needs.
                        </Text>

                        <Text style={styles.consentDescr}>
                            Your total score will be calculated to assess the
                            severity of depressive symptoms. Higher scores
                            suggest more severe depression, which will help
                            guide your treatment options at BrightLife
                            Enhancement Services.
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
                                For each statement below, please indicate how
                                often you have been bothered by the problem
                                using the following scale:
                            </Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2",
                            }}
                        >
                            {depressionOptions.map((scale) => (
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
                                            {depressionOptions.map((option) => (
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

                        <View style={{marginTop: "16"}}>
                            <Text style={{ fontSize: "18" }}>
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
