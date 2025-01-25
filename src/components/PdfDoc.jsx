import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
} from "@react-pdf/renderer";

// Sample styles for the PDF
const styles = StyleSheet.create({
    page: { fontSize: 12 },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        marginBottom: 20,
    },
    letterheadCol: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
    },
    section: { padding: 20, marginBottom: 10 },
    heading: { fontSize: 14, marginBottom: 5, fontWeight: "bold" },
    grid: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "50",
    },
    fieldCol: { display: "flex", flexDirection: "col", gap: "5", width: "25%" },
    label: { fontWeight: "bold" },
    value: {},
    signature: { padding: 20, marginTop: 20 },
    logo: { width: "100%", marginBottom: 10 },
});

const PdfDoc = ({ dataObj, letterhead }) => (
    <Document>
        <Page style={styles.page}>
            {/* Letterhead Section */}
            <Image style={styles.logo} src={letterhead.logo} />
            {/* <View style={styles.header}>
                <Image style={styles.logo} src={letterhead.logo} />
                <View style={styles.letterheadCol}>
                    <Text>{letterhead.name}</Text>
                    <Text>{letterhead.address}</Text>
                </View>
            </View> */}

            {/* Title */}
            <View style={styles.section}>
                <Text style={styles.heading}>Patient Information</Text>
            </View>

            {/* Patient Information Sections */}
            {Object.keys(dataObj).map((sectionKey) => (
                <View key={sectionKey} style={styles.section}>
                    <Text style={styles.heading}>
                        {sectionKey.toUpperCase()}
                    </Text>
                    <View style={styles.grid}>
                        {Object.entries(dataObj[sectionKey]).map(
                            ([key, value]) => (
                                <View key={key} style={styles.fieldCol}>
                                    <Text style={styles.label}>{key}:</Text>
                                    <Text style={styles.value}>
                                        {value || "N/A"}
                                    </Text>
                                </View>
                            )
                        )}
                    </View>
                </View>
            ))}

            {/* Signature Section */}
            <View style={styles.signature}>
                <Text>Signature:</Text>
                <Image
                    style={{ width: 100, height: 50 }}
                    src={dataObj.consent.signature}
                />
                <Text>
                    Date: {new Date(dataObj.consent.date).toLocaleDateString()}
                </Text>
            </View>
        </Page>
    </Document>
);

export default PdfDoc;
