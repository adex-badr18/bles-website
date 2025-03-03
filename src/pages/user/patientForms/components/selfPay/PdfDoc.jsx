import { Document, View, Text, Image, Page } from "@react-pdf/renderer";
import { styles } from "../patientReg/PdfDoc";
import checkbox from "../../../../../assets/checkbox.jpg";
import { selfPayTerms } from "./data";
import LetterHead from "../LetterHead";

const PdfDoc = ({ data }) => {
    const selfPayData = {
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
                value: new Date(data.verification.dob).toLocaleDateString(),
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
        consent: {
            patientSignature: {
                title: "Patient's Signature:",
                value: data.consent.patientSignature,
            },
            date: {
                title: "Date:",
                value: new Date(data.consent.date).toLocaleDateString(),
            },
        },
    };

    const { verification, consent } = selfPayData;

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.wrapper}>
                    {/* Letterhead */}
                    <LetterHead />

                    {/* Form Title */}
                    <Text style={styles.header}>
                        Self-Pay Agreement
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

                    {/* Agreement & Consents */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>Privacy Terms</Text>
                        <View style={styles.flexCol}>
                            <Text style={styles.consentLabel}>
                                This Self-Pay Agreement outlines the terms and
                                conditions for patients who choose to pay for
                                services out-of-pocket rather than using
                                insurance. Please read this agreement carefully.
                                By signing below, you acknowledge and accept the
                                terms of this agreement.
                            </Text>

                            {selfPayTerms.map((term, index) => (
                                <View key={index} style={styles.flexCol}>
                                    <Text>{term.title}</Text>
                                    <View key={term.id} style={styles.flexRow}>
                                        <Image
                                            src={checkbox || ""}
                                            style={{ width: 30, height: 30 }}
                                        />
                                        <Text style={styles.consentLabel}>
                                            {term.descr}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Agreement Confirmation */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>Acknowledgement</Text>

                        <View style={styles.flexCol}>
                            <View style={styles.flexRow}>
                                <Image
                                    src={checkbox || ""}
                                    style={{ width: 30, height: 30 }}
                                />
                                <Text style={styles.consentLabel}>
                                    {`I, ${verification.fullName.value} have read and understand this Self-Pay Agreement. I acknowledge that I am financially responsible for all services provided to me and agree to the terms outlined above.`}
                                </Text>
                            </View>

                            {/* Patient's Date and Signature */}
                            <View
                                style={{
                                    ...styles.flexRowBetween,
                                    width: "100%",
                                }}
                            >
                                <View
                                    style={{
                                        ...styles.flexRow,
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={styles.key}>
                                        Patient Signature:
                                    </Text>
                                    {consent.patientSignature.value ? (
                                        <Image
                                            src={
                                                consent.patientSignature
                                                    ?.value || ""
                                            }
                                            style={{ width: 150 }}
                                        />
                                    ) : (
                                        <Text style={styles.value}>N/A</Text>
                                    )}
                                </View>

                                <View
                                    style={{
                                        ...styles.flexRow,
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={styles.key}>Date Signed:</Text>
                                    <Text style={styles.value}>
                                        {consent.date.value || "N/A"}
                                    </Text>
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
