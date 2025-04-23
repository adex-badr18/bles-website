import { Document, View, Text, Image, Page } from "@react-pdf/renderer";
import { styles } from "../patientReg/PdfDoc";
import checkbox from "../../../../../assets/checkbox.jpg";
import { consents } from "./data";
import LetterHead from "../LetterHead";
import { convertIsoDateToReadable } from "../../../../utils";

const PdfDoc = ({ data }) => {
    const infoConsentData = {
        verification: {
            fullName: {
                title: "Patient's Name:",
                value: `${data.verification.firstName} ${data.verification.middleName} ${data.verification.lastName}`,
            },
            email: { title: "Email:", value: data.verification.email },
            phone: { title: "Phone:", value: data.verification.phone },
            dob: {
                title: "Date of Birth:",
                value: data.verification.dob ?
                    new Date(data.verification.dob).toLocaleDateString() :
                    "N/A",
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
            signature: { title: "Signature:", value: data.consent.signature },
            date: { title: "Date:", value: convertIsoDateToReadable(data.consent.date) || "N/A" },
        },
    };

    const { verification, consent } = infoConsentData;

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.wrapper}>
                    {/* Letterhead */}
                    <LetterHead />

                    {/* Form Title */}
                    <Text style={styles.header}>Patient Information Consent & Financial Policy</Text>

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
                            Acknowledgement
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
                                        {consent.date.value}
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
