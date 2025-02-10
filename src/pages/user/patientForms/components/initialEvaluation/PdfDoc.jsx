import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { styles } from "../patientReg/PdfDoc";
import { consentOptions } from "./data";
import checkbox from "../../../../../assets/checkbox.jpg";

const PdfDoc = ({ data }) => {
    // const consents = consentOptions.map((consent) => consent.label);
    const consents = [
        consentOptions.finRes.label,
        // consentOptions.pcpAuth.label,
        consentOptions.treatmentConsent.label,        
    ];

    const evaluationData = {
        verification: {
            id: { title: "Patient ID:", value: data.verification.id || "N/A" },
            fullName: {
                title: "Patient's Name:",
                value: `${data.verification.firstName} ${data.verification.middleName} ${data.verification.lastName}`,
            },
            email: { title: "Email:", value: data.verification.email || "N/A" },
            phone: { title: "Phone:", value: data.verification.phone || "N/A" },
        },
        pharmacy: {
            name: {
                title: "Pharmacy Name:",
                value: data.pharmacy.name || "N/A",
            },
            phone: { title: "Phone:", value: data.pharmacy.phone || "N/A" },
            streetAddress: {
                title: "Street Address:",
                value: data.pharmacy.address.streetName || "N/A",
            },
            city: {
                title: "City:",
                value: data.pharmacy.address.city || "N/A",
            },
            state: {
                title: "State:",
                value: data.pharmacy.address.state || "N/A",
            },
            zipCode: {
                title: "Zip Code:",
                value: data.pharmacy.address.zipCode || "N/A",
            },
        },
        primaryCarePhysician: {
            havePcp: {
                title: "Do you have PCP?:",
                value: data.primaryCarePhysician.havePcp || "N/A",
            },
            name: {
                title: "PCP Name:",
                value: data.primaryCarePhysician.name || "N/A",
            },
            phone: {
                title: "Phone:",
                value: data.primaryCarePhysician.phone || "N/A",
            },
            fax: {
                title: "Fax:",
                value: data.primaryCarePhysician.fax || "N/A",
            },
            streetAddress: {
                title: "Street Address:",
                value: data.primaryCarePhysician.address.streetName || "N/A",
            },
            city: {
                title: "City:",
                value: data.primaryCarePhysician.address.city || "N/A",
            },
            state: {
                title: "State:",
                value: data.primaryCarePhysician.address.state || "N/A",
            },
            zipCode: {
                title: "Zip Code:",
                value: data.primaryCarePhysician.address.zipCode || "N/A",
            },
        },
        consent: {
            signature: {
                title: "Signature:",
                value: data.consent.signature || "N/A",
            },
            date: {
                title: "Date:",
                value:
                    new Date(data.consent.date).toLocaleDateString() || "N/A",
            },
        },
    };

    const { verification, pharmacy, primaryCarePhysician, consent } =
        evaluationData;

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

                    {/* Pharmacy Info */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Pharmacy Information
                        </Text>
                        <View style={styles.row}>
                            {Object.entries(pharmacy).map(([key, val]) => (
                                <View key={key} style={styles.fieldItem}>
                                    <Text style={styles.key}>{val.title}</Text>
                                    <Text style={styles.value}>
                                        {val.value || "N/A"}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Primary Care Physician Info */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Primary Care Physician (PCP) Information
                        </Text>
                        <View style={styles.row}>
                            {Object.entries(primaryCarePhysician).map(
                                ([key, val]) => (
                                    <View key={key} style={styles.fieldItem}>
                                        <Text style={styles.key}>
                                            {val.title}
                                        </Text>
                                        <Text style={styles.value}>
                                            {val.value || "N/A"}
                                        </Text>
                                    </View>
                                )
                            )}
                        </View>
                    </View>

                    <View style={{...styles.sectionWrapper, marginTop: ""}}>
                        <Text style={styles.sectionHeader}>
                            Agreement and Consents
                        </Text>
                        <View style={styles.row}>
                            {consents.map((consent, index) => (
                                <View key={index} style={styles.flexRow}>
                                    <Image
                                        src={checkbox || ""}
                                        style={{ width: 30, height: 30 }}
                                    />
                                    <Text style={styles.consentLabel}>
                                        {`I, ${verification.fullName.value} ${consent}`}
                                    </Text>
                                </View>
                            ))}

                            {data.primaryCarePhysician.havePcp.toLowerCase() ===
                                "yes" && (
                                <View style={styles.flexRow}>
                                    <Image
                                        src={checkbox || ""}
                                        style={{ width: 30, height: 30 }}
                                    />
                                    <Text style={styles.consentLabel}>
                                        {`I hereby authorize BrightLife Enhancement Services to ${data.primaryCarePhysician.infoToRelease}`}
                                    </Text>
                                </View>
                            )}

                            {data.primaryCarePhysician.infoToRelease && (
                                <View style={styles.flexRow}>
                                    <Image
                                        src={checkbox || ""}
                                        style={{ width: 30, height: 30 }}
                                    />
                                    <Text style={styles.consentLabel}>
                                        {`I, ${verification.fullName.value} ${consentOptions.pcpAuth.label}`}
                                    </Text>
                                </View>
                            )}

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
                                    <Text style={styles.key}>Date:</Text>
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
