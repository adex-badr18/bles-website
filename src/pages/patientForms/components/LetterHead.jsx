import { View, Text, Image } from "@react-pdf/renderer";
import { styles } from "./patientReg/PdfDoc";

const LetterHead = () => {
    return (
        <View style={styles.letterhead}>
            <Text style={styles.brand}>BRIGHTLIFE ENHANCEMENT SERVICES</Text>
            <Text style={styles.tagline}>Holistic Approach To Healthcare</Text>
            <Text style={styles.address}>
                226 N Potomac Street, Hagerstown MD 21740.
            </Text>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 10,
                }}
            >
                <Text style={styles.tagline}>info@blesomhc.com</Text>
                <Text style={styles.address}>(410)-988-2655</Text>
            </View>
        </View>
    );
};

export default LetterHead;
