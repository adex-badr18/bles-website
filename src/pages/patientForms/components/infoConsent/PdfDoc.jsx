import { Document, View, Text, Image, Page } from "@react-pdf/renderer";
import { styles } from "../patientReg/PdfDoc";
import checkbox from "../../../../assets/checkbox.jpg";
import { consents } from "./data";

const PdfDoc = ({ data }) => {
    const infoConsentData = {
        verification: {
            id: { title: "Patient ID:", value: data.verification.id },
            fullName: {
                title: "Patient's Name:",
                value: `${data.verification.firstName} ${data.verification.middleName} ${data.verification.lastName}`,
            },
            email: { title: "Email:", value: data.verification.email },
            phone: { title: "Phone:", value: data.verification.phone },
        },
        consent: {
            signature: { title: "Signature:", value: data.consent.signature },
            date: { title: "Date:", value: new Date(data.consent.date) },
        },
    };

    const { verification, consent } = infoConsentData;

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.wrapper}>
                    {/* Letterhead */}
                    <View style={styles.letterhead}>
                        <Text style={styles.brand}>
                            BRIGHTLIFE ENHANCEMENT SERVICES
                        </Text>
                        <Text style={styles.tagline}>
                            Holistic Approach To Healthcare
                        </Text>
                        <Text style={styles.address}>
                            5, Public Square, Suite 428, Hagerstown, MD 21740.
                        </Text>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                gap: 10,
                            }}
                        >
                            <Text style={styles.tagline}>
                                info@blesomhc.com
                            </Text>
                            <Text style={styles.address}>(410) 988-2626</Text>
                        </View>
                    </View>

                    {/* Form Title */}
                    <Text style={styles.header}>Initial Evaluation Form</Text>

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
                        <Text style={styles.sectionHeader}>
                            Agreement Terms and Conditions
                        </Text>
                        <View style={styles.flexCol}>
                            {consents.map((consent) => (
                                <View key={consent.id} style={styles.flexCol}>
                                    <Text style={styles.consentTitle}>
                                        {consent.title}
                                    </Text>

                                    <View style={{...styles.flexRow, alignItems: "center"}}>
                                        <Image
                                            src={checkbox || ""}
                                            style={{ width: 30, height: 30 }}
                                        />
                                        <Text style={styles.consentLabel}>
                                            {consent.description}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                    
                    <View style={{marginTop: "20"}}></View>
                    {/* Agreement Confirmation */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Agreement Confirmation
                        </Text>

                        <View style={styles.row}>
                            <View style={styles.flexRow}>
                                <Image
                                    src={checkbox || ""}
                                    style={{ width: 30, height: 30 }}
                                />
                                <Text style={styles.consentLabel}>
                                    {`I, ${verification.fullName.value} understand and agree to all the terms and conditions stated above.`}
                                </Text>
                            </View>

                            {/* Date and Signature */}
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
                                    <Text style={styles.key}>Signature:</Text>
                                    {consent.signature.value ? (
                                        <Image
                                            src={consent.signature?.value || ""}
                                            style={{ width: 200 }}
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
                                        {consent.date.value.toLocaleDateString() ||
                                            new Date().toLocaleDateString()}
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
