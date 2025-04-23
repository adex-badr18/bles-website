import { Document, View, Text, Image, Page } from "@react-pdf/renderer";
import { styles } from "../patientReg/PdfDoc";
import checkbox from "../../../../../assets/checkbox.jpg";
import { risksList, revokeRightList } from "./data";
import { formatCamelCase } from "../../utils";
import LetterHead from "../LetterHead";
import { convertIsoDateToReadable } from "../../../../utils";
// import { disclosureList, phidisclosureList, patientRights } from "./data";

const PdfDoc = ({ data }) => {
    const releaseReceiveData = {
        verification: {
            fullName: {
                title: "Patient's Name:",
                value: `${data.verification.firstName} ${data.verification.middleName} ${data.verification.lastName}`,
            },
            email: { title: "Email:", value: data.verification.email },
            phone: { title: "Phone:", value: data.verification.phone },
            dob: {
                title: "Date of Birth:",
                value: data.verification.dob
                    ? new Date(data.verification.dob).toLocaleDateString()
                    : "N/A",
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
                    value: convertIsoDateToReadable(
                        data.consent.patientSignDate
                    ),
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
                    value: convertIsoDateToReadable(
                        data.consent.guardianSignDate
                    ),
                },
            },
        },
        authorization: {
            parties: {
                title: "Individuals/Organizations",
                value: data.authorization.parties,
            },
        },
        parties: data.authorization.parties,
        authRight: data.authRight,
        disclosurePurpose: data.disclosurePurpose,
        infoTypeToRelease: data.infoTypeToRelease,
    };

    const {
        verification,
        consent,
        parties,
        authRight,
        disclosurePurpose,
        infoTypeToRelease,
    } = releaseReceiveData;

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.wrapper}>
                    {/* Letterhead */}
                    <LetterHead />

                    {/* Form Title */}
                    <Text style={styles.header}>Release Receive Form</Text>

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

                    {/* Authorization Rights */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Authorization for Exchange of Information
                        </Text>
                        <View style={{ ...styles.flexCol, gap: 6 }}>
                            <Text>{`I, ${verification.fullName.value} hereby authorize BrightLife Enhancement Services to:`}</Text>
                            {authRight.map((item, index) => (
                                <View
                                    key={index}
                                    style={{
                                        ...styles.flexRow,
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        src={checkbox || ""}
                                        style={{ width: 30, height: 30 }}
                                    />
                                    <Text style={styles.consentLabel}>
                                        {item}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Receiving/Sending Party Information */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Individual(s)/Organization(s)
                        </Text>
                        <View
                            style={{
                                ...styles.flexCol,
                                gap: 6,
                            }}
                        >
                            {parties.map((party, index) => (
                                <View
                                    key={index}
                                    style={{
                                        ...styles.row,
                                        padding: 16,
                                        border: "1px solid gray",
                                        borderRadius: 8,
                                    }}
                                >
                                    {Object.entries(party).map(([key, val]) => (
                                        <View
                                            key={key}
                                            style={styles.fieldItem}
                                        >
                                            <Text style={styles.key}>
                                                {`${formatCamelCase(key)}:`}
                                            </Text>
                                            <Text style={styles.value}>
                                                {val || "N/A"}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Purpose of Disclosure */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Purpose of Disclosure
                        </Text>
                        <View style={{ ...styles.flexCol, gap: 6 }}>
                            <Text>{`I, ${verification.fullName.value} hereby authorize BrightLife Enhancement Services to disclose my information for the following purposes ONLY:`}</Text>
                            {disclosurePurpose.map((purpose, index) => (
                                <View
                                    key={index}
                                    style={{
                                        ...styles.flexRow,
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        src={checkbox || ""}
                                        style={{ width: 30, height: 30 }}
                                    />
                                    <Text style={styles.consentLabel}>
                                        {purpose}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Type of Information to Disclose */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Type of Information to Disclose
                        </Text>
                        <View style={{ ...styles.flexCol, gap: 6 }}>
                            <Text>{`I, ${verification.fullName.value} hereby authorize BrightLife Enhancement Services to disclose the following type of information:`}</Text>
                            {infoTypeToRelease.map((type, index) => (
                                <View
                                    key={index}
                                    style={{
                                        ...styles.flexRow,
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        src={checkbox || ""}
                                        style={{ width: 30, height: 30 }}
                                    />
                                    <Text style={styles.consentLabel}>
                                        {type}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Right to Revoke */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Right to Revoke
                        </Text>
                        <View style={styles.flexCol}>
                            {revokeRightList.map((right) => (
                                <View
                                    key={right.id}
                                    style={{
                                        ...styles.flexRow,
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        src={checkbox || ""}
                                        style={{ width: 30, height: 30 }}
                                    />
                                    <Text style={styles.consentLabel}>
                                        {right.descr}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Risks & Privacy Considerations */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Risks & Privacy Considerations
                        </Text>
                        <View style={styles.flexCol}>
                            {risksList.map((risk) => (
                                <View
                                    key={risk.id}
                                    style={{
                                        ...styles.flexRow,
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        src={checkbox || ""}
                                        style={{ width: 30, height: 30 }}
                                    />
                                    <Text style={styles.consentLabel}>
                                        {risk.descr}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </Page>

            <Page style={styles.page}>
                <View style={styles.wrapper}>
                    {/* Agreement Confirmation */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Acknowledgement
                        </Text>

                        <View style={styles.flexCol}>
                            {/* Guardian Info and Signature */}
                            {data.consent.isMinor.toLowerCase() === "yes" && (
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
                                                            alignItems:
                                                                "center",
                                                        }}
                                                    >
                                                        <Text
                                                            style={styles.key}
                                                        >
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
                                                                style={
                                                                    styles.value
                                                                }
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
                                                            alignItems:
                                                                "center",
                                                        }}
                                                    >
                                                        <Text
                                                            style={styles.key}
                                                        >
                                                            {obj.title}
                                                        </Text>
                                                        <Text
                                                            style={styles.value}
                                                        >
                                                            {obj.value || "N/A"}
                                                        </Text>
                                                    </View>
                                                )
                                        )}
                                    </View>
                                </View>
                            )}

                            {/* Patient Signature and Date */}
                            <View style={styles.sectionWrapper}>
                                <View
                                    style={{
                                        ...styles.flexRowBetween,
                                        width: "100%",
                                    }}
                                >
                                    {Object.values(consent.patient).map(
                                        (obj, index) =>
                                            obj.title
                                                .toLocaleLowerCase()
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
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PdfDoc;
