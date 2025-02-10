import React from "react";
import {
    PDFViewer,
    pdf,
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
    Svg,
} from "@react-pdf/renderer";
import { regData } from "./Preview";
import { consentOptions } from "../../data";

import checkbox from "../../../../assets/checkbox.jpg";

const styles = StyleSheet.create({
    page: { fontSize: 12, padding: 10 },
    letterhead: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        width: "100%",
        marginBottom: 20,
        paddingBottom: 10,
        borderBottom: "2px solid gray",
    },
    brand: {
        textTransform: "uppercase",
        fontSize: 18,
        fontWeight: "bold",
        color: "#006002",
    },
    wrapper: { padding: 16 },
    address: { fontWeight: "medium", fontSize: 12, color: "#34C759" },
    tagline: { fontWeight: "medium", fontSize: 12, color: "#34C759" },
    header: {
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 20,
    },
    sectionHeader: {
        fontWeight: "bold",
        marginBottom: 16,
        fontSize: 14,
        textTransform: "uppercase",
    },
    sectionWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: 16,
        border: "1px solid gray",
        borderRadius: 8,
        marginBottom: 16,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        rowGap: 16,
        columnGap: 5,
    },
    fieldItem: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 5,
        width: "47%",
    },
    flexCol: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },
    flexRow: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
    },
    flexRowBetween: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },
    key: { fontWeight: "medium" },
    value: {},
    idImg: { width: "250", height: 200 },
    flexImages: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    consentLabel: {maxWidth: 450, lineHeight: "1"},
    consentTitle: {fontSize: 14, fontWeight: "extrabold"}
});

const PreviewTemp = ({ data }) => {
    const {
        personal,
        guarantor,
        parent,
        emergency,
        primaryInsurance,
        secondaryInsurance,
        consent,
    } = regData;

    return (
        <PDFViewer style={{ width: "100%", height: "1000px" }}>
            <Document>
                {/* Page 1 */}
                <Page style={styles.page}>
                    <View style={styles.wrapper}>
                        <View style={styles.letterhead}>
                            <Text style={styles.brand}>
                                BRIGHTLIFE ENHANCEMENT SERVICES
                            </Text>
                            <Text style={styles.tagline}>
                                Holistic Approach To Healthcare
                            </Text>
                            <Text style={styles.address}>
                                5, Public Square, Suite 428, Hagerstown, MD
                                21740.
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
                                <Text style={styles.address}>
                                    (410) 988-2626
                                </Text>
                            </View>
                        </View>

                        <Text style={styles.header}>
                            Patient Registration Form
                        </Text>

                        <View style={styles.sectionWrapper}>
                            <Text style={styles.sectionHeader}>
                                Patient Information
                            </Text>
                            <View style={styles.row}>
                                {Object.entries(personal).map(([key, val]) => (
                                    <View key={key} style={styles.fieldItem}>
                                        <Text style={styles.key}>
                                            {val.title}
                                        </Text>
                                        <Text style={styles.value}>
                                            {val.value || "N/A"}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View style={styles.sectionWrapper}>
                            <Text style={styles.sectionHeader}>
                                Guarantor Information
                            </Text>
                            <View style={styles.row}>
                                {Object.entries(guarantor).map(([key, val]) => {
                                    if (
                                        key === "stateIssuedId" ||
                                        key === "insuranceCard"
                                    ) {
                                        return;
                                    }

                                    return (
                                        <View
                                            key={key}
                                            style={styles.fieldItem}
                                        >
                                            <Text style={styles.key}>
                                                {val.title}
                                            </Text>
                                            <Text style={styles.value}>
                                                {val.value || "N/A"}
                                            </Text>
                                        </View>
                                    );
                                })}
                            </View>

                            <View style={styles.flexImages}>
                                <View
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 5,
                                        marginTop: 16,
                                    }}
                                >
                                    <Text style={styles.key}>
                                        {guarantor.stateIssuedId.title}
                                    </Text>
                                    {guarantor.stateIssuedId ? (
                                        <Image
                                            src={guarantor.stateIssuedId.value}
                                            style={styles.idImg}
                                        />
                                    ) : (
                                        <Text style={styles.value}>N/A</Text>
                                    )}
                                </View>

                                <View
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 5,
                                        marginTop: 16,
                                    }}
                                >
                                    <Text style={styles.key}>
                                        {guarantor.insuranceCard.title}
                                    </Text>
                                    {guarantor.insuranceCard ? (
                                        <Image
                                            src={guarantor.insuranceCard.value}
                                            style={styles.idImg}
                                        />
                                    ) : (
                                        <Text style={styles.value}>N/A</Text>
                                    )}
                                </View>
                            </View>
                        </View>

                        <View style={styles.sectionWrapper}>
                            <Text style={styles.sectionHeader}>
                                Parent/Guardian Information
                            </Text>
                            <View style={styles.row}>
                                {Object.entries(parent).map(([key, val]) => (
                                    <View key={key} style={styles.fieldItem}>
                                        <Text style={styles.key}>
                                            {val.title}
                                        </Text>
                                        <Text style={styles.value}>
                                            {val.value || "N/A"}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View style={styles.sectionWrapper}>
                            <Text style={styles.sectionHeader}>
                                Emergency Contact
                            </Text>
                            <View style={styles.row}>
                                {Object.entries(emergency).map(([key, val]) => (
                                    <View key={key} style={styles.fieldItem}>
                                        <Text style={styles.key}>
                                            {val.title}
                                        </Text>
                                        <Text style={styles.value}>
                                            {val.value || "N/A"}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View style={styles.sectionWrapper}>
                            <Text style={styles.sectionHeader}>
                                Primary Insurance Information
                            </Text>
                            <View style={styles.row}>
                                {Object.entries(primaryInsurance).map(
                                    ([key, val]) => (
                                        <View
                                            key={key}
                                            style={styles.fieldItem}
                                        >
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

                        <View style={styles.sectionWrapper}>
                            <Text style={styles.sectionHeader}>
                                Secondary Insurance Information
                            </Text>
                            <View style={styles.row}>
                                {Object.entries(secondaryInsurance).map(
                                    ([key, val]) => (
                                        <View
                                            key={key}
                                            style={styles.fieldItem}
                                        >
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

                        <View style={styles.sectionWrapper}>
                            <Text style={styles.sectionHeader}>
                                Agreement and Consents
                            </Text>
                            <View style={styles.row}>
                                {consentOptions.map((consent) => (
                                    <View
                                        key={consent.id}
                                        style={styles.flexCol}
                                    >
                                        <Text style={styles.consentTitle}>
                                            {consent.title}
                                        </Text>

                                        <View style={styles.flexRow}>
                                            <Image
                                                style={{ width: 30, height: 30 }}
                                                src={checkbox}
                                            />
                                            <Text style={styles.consentLabel}>
                                                {consent.label}
                                            </Text>
                                        </View>
                                    </View>
                                ))}

                                <View style={{...styles.flexRowBetween, width: "100%"}}>
                                    <View style={{...styles.flexRow, alignItems: "center"}}>
                                        <Text style={styles.key}>Signature:</Text>
                                        <Image src={consent.signature.value} style={{width: 100}} />
                                    </View>
                                    <View style={{...styles.flexRow, alignItems: "center"}}>
                                        <Text style={styles.key}>Date:</Text>
                                        <Text style={styles.value}>{consent.date.value}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
};

export default PreviewTemp;
