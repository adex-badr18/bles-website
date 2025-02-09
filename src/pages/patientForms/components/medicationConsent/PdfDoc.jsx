import { Document, View, Text, Image, Page } from "@react-pdf/renderer";
import { styles } from "../patientReg/PdfDoc";
import checkbox from "../../../../assets/checkbox.jpg";
import LetterHead from "../LetterHead";

import { consents } from "./data";

const PdfDoc = ({ data }) => {
    const medicationConsentData = {
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
                value: new Date(data.verification.dob).toLocaleDateString() || "N/A",
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
        consent: {
            patient: {
                patientSignature: {
                    title: "Patient's Signature:",
                    value: data.consent.patientSignature,
                },
                patientSignDate: {
                    title: "Date:",
                    value: new Date(data.consent.patientSignDate).toLocaleDateString() || "N/A",
                },
            },
            guardian: {
                guardianName: {
                    title: "Guardian Name:",
                    value: data.consent.guardianName,
                },
                patientGuardianRelationship: {
                    title: "Relationship:",
                    value: data.consent.patientGuardianRelationship,
                },
                guardianSignature: {
                    title: "Guardian Signature:",
                    value: data.consent.guardianSignature,
                },
                guardianSignDate: {
                    title: "Date:",
                    value: new Date(data.consent.guardianSignDate).toLocaleDateString() || "N/A",
                },
            },
        },
    };

    const { verification, consent } = medicationConsentData;

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.wrapper}>
                    <LetterHead />

                    {/* Form Title */}
                    <Text style={styles.header}>Medication Consent Form</Text>

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

                    {/* Consents */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Medication Consents
                        </Text>
                        {consents.map((consent) => (
                            <View
                                key={consent.id}
                                style={{
                                    ...styles.flexCol,
                                    marginBottom: "10",
                                }}
                            >
                                <Text style={styles.consentTitle}>
                                    {consent.title}
                                </Text>
                                <Text style={styles.consentDescr}>
                                    {consent.consent}
                                </Text>

                                {consent.lists && (
                                    <View>
                                        {consent.lists.map((item) => (
                                            <View
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "flex-start",
                                                    gap: 8,
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: "50%",
                                                        backgroundColor:
                                                            "#2b3944", marginTop: 3
                                                    }}
                                                ></View>
                                                <Text
                                                    style={styles.consentDescr}
                                                >{`${item.title}: ${item.descr}`}</Text>
                                            </View>
                                        ))}
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>

                    <View style={styles.sectionWrapper}>
                        <View style={styles.flexRow}>
                            <Image
                                src={checkbox || ""}
                                style={{ width: 30, height: 30 }}
                            />
                            <Text style={styles.consentLabel}>
                                {`I, ${verification.fullName.value} have read and understand the above information regarding my prescribed medications. I have had the opportunity to ask questions and receive answers that address my concerns. By signing below, I voluntarily consent to receive treatment as described.`}
                            </Text>
                        </View>
                    </View>

                    {/* Agreement Confirmation */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Acknowledgement
                        </Text>

                        <View style={styles.flexCol}>
                            {/* Guardian Info and Signature */}
                            <View style={styles.sectionWrapper}>
                                <View
                                    style={{
                                        ...styles.row,
                                        ...styles.flexRowBetween,
                                        width: "100%",
                                    }}
                                >
                                    {Object.values(consent.guardian).map(
                                        (obj, index) =>
                                            obj.title
                                                .toLowerCase()
                                                .includes("signature") ? (
                                                <View
                                                    key={index}
                                                    style={{
                                                        ...styles.flexRow,
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Text style={styles.key}>
                                                        {obj.title}
                                                    </Text>
                                                    {obj.value ? (
                                                        <Image
                                                            src={obj.value}
                                                            style={{
                                                                width: 100,
                                                            }}
                                                        />
                                                    ) : (
                                                        <Text
                                                            style={styles.value}
                                                        >
                                                            N/A
                                                        </Text>
                                                    )}
                                                </View>
                                            ) : (
                                                <View
                                                    key={index}
                                                    style={{
                                                        ...styles.flexRow,
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Text style={styles.key}>
                                                        {obj.title}
                                                    </Text>
                                                    <Text style={styles.value}>
                                                        {obj.value || "N/A"}
                                                    </Text>
                                                </View>
                                            )
                                    )}
                                </View>
                            </View>

                            {/* Patient Signature and Date */}
                            <View style={styles.sectionWrapper}>
                                <View
                                    style={{
                                        ...styles.flexRowBetween,
                                        width: "100%",
                                    }}
                                >
                                    {Object.values(consent.patient).map((obj) =>
                                        obj.title
                                            .toLocaleLowerCase()
                                            .includes("signature") ? (
                                            <View
                                                style={{
                                                    ...styles.flexRow,
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Text style={styles.key}>
                                                    {obj.title}
                                                </Text>
                                                {obj.value ? (
                                                    <Image
                                                        src={obj.value}
                                                        style={{
                                                            width: 100,
                                                        }}
                                                    />
                                                ) : (
                                                    <Text style={styles.value}>
                                                        N/A
                                                    </Text>
                                                )}
                                            </View>
                                        ) : (
                                            <View
                                                style={{
                                                    ...styles.flexRow,
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Text style={styles.key}>
                                                    {obj.title}
                                                </Text>
                                                <Text style={styles.value}>
                                                    {obj.value || "N/A"}
                                                </Text>
                                            </View>
                                        )
                                    )}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PdfDoc;
