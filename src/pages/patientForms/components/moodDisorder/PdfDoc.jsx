import { Document, View, Text, Page } from "@react-pdf/renderer";
import LetterHead from "../LetterHead";
import { booleanOptions, influenceOnLifeOptions } from "./data";
import { styles } from "../patientReg/PdfDoc";

const PdfDoc = ({ data }) => {
    const moodDisorderData = {
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
            date: {
                title: "Date:",
                value: data.verification.date || "N/A",
            },
        },
        part1: data.part1,
        part2: data.part2,
    };

    const { verification, part1, part2 } = moodDisorderData;

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.wrapper}>
                    <LetterHead />

                    {/* Form Title */}
                    <Text style={styles.header}>
                        Mood Disorder Questionnaire (MDQ) Screener
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
                        <Text style={styles.sectionHeader}>Questionnaire</Text>

                        <Text style={styles.consentDescr}>
                            The MDQ Screener is a self-report tool used to
                            identify symptoms that may be consistent with
                            bipolar disorder. It assists our clinicians in
                            understanding your mood patterns and whether further
                            evaluation is needed.
                        </Text>

                        <Text style={styles.consentDescr}>
                            Note: Your responses will help determine if your
                            mood experiences warrant further evaluation for
                            bipolar disorder. A positive screening does not
                            diagnose bipolar disorder but indicates the need for
                            a more comprehensive clinical assessment.
                        </Text>

                        <Text
                            style={{ ...styles.consentDescr, marginTop: "16" }}
                        >
                            Please answer “Yes” or “No” for each of the
                            following questions regarding your experiences over
                            your lifetime.
                        </Text>

                        <View
                            style={{
                                marginTop: "20",
                                display: "flex",
                                flexDirection: "column",
                                gap: "16",
                            }}
                        >
                            <Text style={styles.consentTitle}>Section One</Text>
                            {Object.entries(part1).map(
                                ([key, value], index) => (
                                    <View
                                        key={key}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "12",
                                        }}
                                    >
                                        <Text>{value.question}</Text>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                                rowGap: 8,
                                                columnGap: 5,
                                            }}
                                        >
                                            {booleanOptions.map((option) => (
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
                                                                part1[key]
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
                            <Text style={styles.consentTitle}>Section Two</Text>
                            {Object.entries(part2).map(
                                ([key, value], index) => (
                                    <View
                                        key={key}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "12",
                                        }}
                                    >
                                        <Text>{value.question}</Text>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                                rowGap: 8,
                                                columnGap: 5,
                                            }}
                                        >
                                            {key === "influenceOnLife"
                                                ? influenceOnLifeOptions.map(
                                                      (option) => (
                                                          <View
                                                              key={option.id}
                                                              style={{
                                                                  display:
                                                                      "flex",
                                                                  flexDirection:
                                                                      "row",
                                                                  alignItems:
                                                                      "center",
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
                                                                          part2[
                                                                              key
                                                                          ]
                                                                              .answer ===
                                                                          option.value
                                                                              ? "#223645"
                                                                              : ""
                                                                      }`,
                                                                      flexShrink:
                                                                          "0",
                                                                  }}
                                                              ></View>
                                                              <Text>
                                                                  {option.text}
                                                              </Text>
                                                          </View>
                                                      )
                                                  )
                                                : booleanOptions.map(
                                                      (option) => (
                                                          <View
                                                              key={option.id}
                                                              style={{
                                                                  display:
                                                                      "flex",
                                                                  flexDirection:
                                                                      "row",
                                                                  alignItems:
                                                                      "center",
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
                                                                          part2[
                                                                              key
                                                                          ]
                                                                              .answer ===
                                                                          option.value
                                                                              ? "#223645"
                                                                              : ""
                                                                      }`,
                                                                      flexShrink:
                                                                          "0",
                                                                  }}
                                                              ></View>
                                                              <Text>
                                                                  {option.text}
                                                              </Text>
                                                          </View>
                                                      )
                                                  )}
                                        </View>
                                    </View>
                                )
                            )}
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PdfDoc;
