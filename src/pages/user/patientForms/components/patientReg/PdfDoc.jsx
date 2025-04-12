import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
} from "@react-pdf/renderer";
import { consentOptions } from "../../data";

import LetterHead from "../LetterHead";

import checkbox from "../../../../../assets/checkbox.jpg";

export const styles = StyleSheet.create({
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
        marginBottom: 12,
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
    consentLabel: { maxWidth: "450", lineHeight: "1" },
    consentDescr: { maxWidth: "100%", lineHeight: "1" },
    consentTitle: { fontSize: 14, fontWeight: "extrabold" },
});

const PdfDoc = ({ data }) => {
    const regData = {
        personal: {
            firstName: { title: "First Name:", value: data.personal.firstName },
            middleName: {
                title: "Middle Name:",
                value: data.personal.middleName,
            },
            lastName: { title: "Last Name:", value: data.personal.lastName },
            gender: { title: "Gender:", value: data.personal.gender },
            dob: {
                title: "Date of Birth:",
                value: data.personal.dob
                    ? new Date(data.personal.dob).toLocaleDateString()
                    : "N/A",
            },
            maritalStatus: {
                title: "Marital Status:",
                value: data.personal.maritalStatus,
            },
            socialSecurityNumber: {
                title: "Social Security Number:",
                value: data.personal.socialSecurityNumber,
            },
            homePhone: { title: "Home Phone:", value: data.personal.homePhone },
            cellPhone: { title: "Cell Phone:", value: data.personal.cellPhone },
            workPhone: { title: "Work Phone:", value: data.personal.workPhone },
            preferredPhone: {
                title: "Preferred Phone:",
                value: data.personal.preferredPhone,
            },
            appointmentReminderMode: {
                title: "Appointment Reminder Mode:",
                value: data.personal.appointmentReminderMode,
            },
            email: { title: "Email:", value: data.personal.email },
            streetAddress: {
                title: "Street Address",
                value: data.personal.address.streetName,
            },
            city: { title: "City:", value: data.personal.address.city },
            state: { title: "State:", value: data.personal.address.state },
            zipCode: {
                title: "Zip Code:",
                value: data.personal.address.zipCode,
            },
            sendMsgToHomePhone: {
                title: "Leave message on home phone:",
                value: data.personal.sendMsgToHomePhone,
            },
            sendMsgToRelative: {
                title: "Leave message with relatives:",
                value: data.personal.sendMsgToRelative,
            },
            sendMsgToWork: {
                title: "Leave message on work phone:",
                value: data.personal.sendMsgToWork,
            },
            sendMsgToCellPhone: {
                title: "Leave message on cell phone:",
                value: data.personal.sendMsgToCellPhone,
            },

            highestEduLevel: {
                title: "Highest Level of Education:",
                value: data.personal.highestEduLevel,
            },
            employmentStatus: {
                title: "Employment Status:",
                value: data.personal.employmentStatus,
            },
            employer: { title: "Employer:", value: data.personal.employer },
            occupation: {
                title: "Occupation:",
                value: data.personal.occupation,
            },
            religion: { title: "Religion:", value: data.personal.religion },
            ethnicity: { title: "Ethnicity:", value: data.personal.ethnicity },
            race: { title: "Race:", value: data.personal.race },
            preferredLanguage: {
                title: "Preferred Language:",
                value: data.personal.preferredLanguage,
            },
        },
        guarantor: {
            firstName: {
                title: "First Name:",
                value: data.guarantor.firstName,
            },
            // middleName: {title: "Middle Name:", value: ""},
            lastName: { title: "Last Name:", value: data.guarantor.lastName },
            dob: {
                title: "Date of Birth:",
                value: data.guarantor.dob ? new Date(data.guarantor.dob).toLocaleDateString() : "N/A",
            },
            relationship: {
                title: "Relationship:",
                value: data.guarantor.relationship,
            },
            streetAddress: {
                title: "Street Address",
                value: data.guarantor.address.streetName,
            },
            city: { title: "City:", value: data.guarantor.address.city },
            state: { title: "State:", value: data.guarantor.address.state },
            zipCode: {
                title: "Zip Code:",
                value: data.guarantor.address.zipCode,
            },
            phone: { title: "Phone Number:", value: data.guarantor.phone },
            email: { title: "Email:", value: data.guarantor.email },
            stateIssuedId: {
                title: "State Issued ID:",
                value: data.guarantor.stateIssuedId,
            },
            insuranceCard: {
                title: "Insurance Card:",
                value: data.guarantor.insuranceCard,
            },
        },
        parent: {
            firstName: { title: "First Name:", value: data.parent.firstName },
            // middleName: {title: "Middle Name:", value: ""},
            lastName: { title: "Last Name:", value: data.parent.lastName },
            gender: { title: "Gender:", value: data.parent.gender },
            maritalStatus: {
                title: "Marital Status:",
                value: data.parent.maritalStatus,
            },
            phone: { title: "Phone Number:", value: data.parent.phone },
            email: { title: "Email:", value: data.parent.email },
            streetAddress: {
                title: "Street Address",
                value: data.parent.address.streetName,
            },
            city: { title: "City:", value: data.parent.address.city },
            state: { title: "State:", value: data.parent.address.state },
            zipCode: { title: "Zip Code:", value: data.parent.address.zipCode },
            familyRole: {
                title: "Family Role:",
                value: data.parent.familyRole,
            },
            employmentStatus: {
                title: "Employment Status:",
                value: data.parent.employmentStatus,
            },
            employer: { title: "Employer:", value: data.parent.employer },
            occupation: { title: "Occupation", value: data.parent.occupation },
        },
        emergency: {
            firstName: {
                title: "First Name:",
                value: data.emergency.firstName,
            },
            // middleName: {title: "Middle Name:", value: ""},
            lastName: { title: "Last Name:", value: data.emergency.lastName },
            relationship: {
                title: "Relationship:",
                value: data.emergency.relationship,
            },
            streetAddress: {
                title: "Street Address",
                value: data.emergency.address.streetName,
            },
            city: { title: "City:", value: data.emergency.address.city },
            state: { title: "State:", value: data.emergency.address.state },
            zipCode: {
                title: "Zip Code:",
                value: data.emergency.address.zipCode,
            },
            homePhone: { title: "Home Phone", value: data.emergency.homePhone },
            cellPhone: {
                title: "Cell Phone:",
                value: data.emergency.cellPhone,
            },
            email: { title: "Email:", value: data.emergency.email },
        },
        primaryInsurance: {
            policyHolderFirstName: {
                title: "First Name:",
                value: data.insurance.primaryInsurance.policyHolder.firstName,
            },
            policyHolderMiddleName: {
                title: "Middle Name:",
                value: data.insurance.primaryInsurance.policyHolder.middleName,
            },
            policyHolderLastName: {
                title: "Last Name:",
                value: data.insurance.primaryInsurance.policyHolder.lastName,
            },
            policyHolderRelationship: {
                title: "Relationship to Patient:",
                value: data.insurance.primaryInsurance.policyHolder
                    .relationship,
            },
            policyHolderPhone: {
                title: "Phone:",
                value: data.insurance.primaryInsurance.policyHolder.phone,
            },
            policyHolderDob: {
                title: "Date of Birth:",
                value: data.insurance.primaryInsurance.policyHolder.dob
                    ? new Date(
                          data.insurance.primaryInsurance.policyHolder.dob
                      ).toLocaleDateString()
                    : "N/A",
            },
            insuranceProviderName: {
                title: "Provider Name:",
                value: data.insurance.primaryInsurance.insuranceProvider.name,
            },
            insuranceProviderPhone: {
                title: "Phone:",
                value: data.insurance.primaryInsurance.insuranceProvider.phone,
            },
            policyId: {
                title: "Policy ID:",
                value: data.insurance.primaryInsurance.insuranceProvider
                    .policyId,
            },
            groupNumber: {
                title: "Group Number:",
                value: data.insurance.primaryInsurance.insuranceProvider
                    .groupNumber,
            },
            authorizationId: {
                title: "Authorization/Pre-Approval Number:",
                value: data.insurance.primaryInsurance.insuranceProvider
                    .authorizationId,
            },
            coPay: {
                title: "Co-pay:",
                value: data.insurance.primaryInsurance.insuranceProvider.coPay,
            },
            coverageStartDate: {
                title: "Coverage Start Date:",
                value: data.insurance.primaryInsurance.insuranceProvider
                    .coverageStartDate
                    ? new Date(
                          data.insurance.primaryInsurance.insuranceProvider.coverageStartDate
                      ).toLocaleDateString()
                    : "N/A",
            },
            coverageEndDate: {
                title: "Coverage End Date:",
                value: data.insurance.primaryInsurance.insuranceProvider
                    .coverageEndDate
                    ? new Date(
                          data.insurance.primaryInsurance.insuranceProvider.coverageEndDate
                      ).toLocaleDateString()
                    : "N/A",
            },
            streetAddress: {
                title: "Street Address",
                value: data.insurance.primaryInsurance.insuranceProvider.address
                    .streetName,
            },
            city: {
                title: "City:",
                value: data.insurance.primaryInsurance.insuranceProvider.address
                    .city,
            },
            state: {
                title: "State:",
                value: data.insurance.primaryInsurance.insuranceProvider.address
                    .state,
            },
            zipCode: {
                title: "Zip Code:",
                value: data.insurance.primaryInsurance.insuranceProvider.address
                    .zipCode,
            },
        },
        secondaryInsurance: {
            policyHolderFirstName: {
                title: "First Name:",
                value: data.insurance.secondaryInsurance.policyHolder.firstName,
            },
            policyHolderMiddleName: {
                title: "Middle Name:",
                value: data.insurance.secondaryInsurance.policyHolder
                    .middleName,
            },
            policyHolderLastName: {
                title: "Last Name:",
                value: data.insurance.secondaryInsurance.policyHolder.lastName,
            },
            policyHolderRelationship: {
                title: "Relationship to Patient:",
                value: data.insurance.secondaryInsurance.policyHolder
                    .relationship,
            },
            policyHolderPhone: {
                title: "Phone:",
                value: data.insurance.secondaryInsurance.policyHolder.phone,
            },
            policyHolderDob: {
                title: "Date of Birth:",
                value: data.insurance.secondaryInsurance.policyHolder.dob
                    ? new Date(
                          data.insurance.secondaryInsurance.policyHolder.dob
                      ).toLocaleDateString()
                    : "N/A",
            },
            insuranceProviderName: {
                title: "Provider Name:",
                value: data.insurance.secondaryInsurance.insuranceProvider.name,
            },
            insuranceProviderPhone: {
                title: "Phone:",
                value: data.insurance.secondaryInsurance.insuranceProvider
                    .phone,
            },
            policyId: {
                title: "Policy ID:",
                value: data.insurance.secondaryInsurance.insuranceProvider
                    .policyId,
            },
            groupNumber: {
                title: "Group Number:",
                value: data.insurance.secondaryInsurance.insuranceProvider
                    .groupNumber,
            },
            authorizationId: {
                title: "Authorization/Pre-Approval Number:",
                value: data.insurance.secondaryInsurance.insuranceProvider
                    .authorizationId,
            },
            coPay: {
                title: "Co-pay:",
                value: data.insurance.secondaryInsurance.insuranceProvider
                    .coPay,
            },
            // haveCoordinationBenefits: {
            //     title: "Do you have coordination of benefits:",
            //     value: data.insurance.secondaryInsurance.insuranceProvider
            //         .haveCoordinationBenefits,
            // },
            coverageStartDate: {
                title: "Coverage Start Date:",
                value: data.insurance.secondaryInsurance.insuranceProvider
                    .coverageStartDate
                    ? new Date(
                          data.insurance.secondaryInsurance.insuranceProvider.coverageStartDate
                      ).toLocaleDateString()
                    : "N/A",
            },
            coverageEndDate: {
                title: "Coverage End Date:",
                value: data.insurance.secondaryInsurance.insuranceProvider
                    .coverageEndDate
                    ? new Date(
                          data.insurance.secondaryInsurance.insuranceProvider.coverageEndDate
                      ).toLocaleDateString()
                    : "N/A",
            },
            streetAddress: {
                title: "Street Address",
                value: data.insurance.secondaryInsurance.insuranceProvider
                    .address.streetName,
            },
            city: {
                title: "City:",
                value: data.insurance.secondaryInsurance.insuranceProvider
                    .address.city,
            },
            state: {
                title: "State:",
                value: data.insurance.secondaryInsurance.insuranceProvider
                    .address.state,
            },
            zipCode: {
                title: "Zip Code:",
                value: data.insurance.secondaryInsurance.insuranceProvider
                    .address.zipCode,
            },
        },
        consent: {
            signature: { title: "Signature:", value: data.consent.signature },
            date: {
                title: "Date",
                value: new Date(data.consent.date).toLocaleDateString(),
            },
        },
    };

    const {
        personal,
        guarantor,
        parent,
        emergency,
        primaryInsurance,
        secondaryInsurance,
        consent,
    } = regData;

    console.log(regData);

    return (
        <Document>
            {/* Page 1 */}
            <Page style={styles.page}>
                <View style={styles.wrapper}>
                    <LetterHead />

                    <Text style={styles.header}>Patient Registration Form</Text>

                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Patient Information
                        </Text>
                        <View style={styles.row}>
                            {Object.entries(personal).map(([key, val]) => (
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
                                    <View key={key} style={styles.fieldItem}>
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
                                {guarantor.stateIssuedId?.value ? (
                                    <Image
                                        src={
                                            guarantor.stateIssuedId.value || ""
                                        }
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
                                {guarantor.insuranceCard?.value ? (
                                    <Image
                                        src={
                                            guarantor.insuranceCard.value || ""
                                        }
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
                                    <Text style={styles.key}>{val.title}</Text>
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
                                    <Text style={styles.key}>{val.title}</Text>
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

                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Secondary Insurance Information
                        </Text>
                        <View style={styles.row}>
                            {Object.entries(secondaryInsurance).map(
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

                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>
                            Agreement and Consents
                        </Text>
                        <View style={styles.row}>
                            {consentOptions.map((consent) => (
                                <View key={consent.id} style={styles.flexCol}>
                                    <Text style={styles.consentTitle}>
                                        {consent.title}
                                    </Text>

                                    <View style={styles.flexRow}>
                                        <Image
                                            src={checkbox || ""}
                                            style={{ width: 30, height: 30 }}
                                        />
                                        <Text style={styles.consentLabel}>
                                            {consent.label}
                                        </Text>
                                    </View>
                                </View>
                            ))}

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
                                        {consent.date.value || new Date()}
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
