import { Document, View, Text, Image, Page } from "@react-pdf/renderer";
import { styles } from "../patientReg/PdfDoc";
import checkbox from "../../../../../assets/checkbox.jpg";
import { disclosureList, phidisclosureList, patientRights } from "./data";
import LetterHead from "../LetterHead";
import { convertIsoDateToReadable } from "../../../../utils";

const PdfDoc = ({ data }) => {
    const privacyPracticesData = {
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
            patientSignature: {
                title: "Patient's Signature:",
                value: data.consent.patientSignature,
            },
            noticeEffectDate: {
                title: "Date:",
                value: new Date(
                    data.consent.noticeEffectDate
                ).toLocaleDateString(),
            },
            date: {
                title: "Date:",
                value:
                    convertIsoDateToReadable(data.consent.date) ||
                    convertIsoDateToReadable(new Date()),
            },
        },
    };

    const { verification, consent } = privacyPracticesData;

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.wrapper}>
                    {/* Letterhead */}
                    <LetterHead />

                    {/* Form Title */}
                    <Text style={styles.header}>
                        Notice of Privacy Practices
                    </Text>

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
                        <Text style={styles.sectionHeader}>Privacy Terms</Text>
                        <View style={styles.flexCol}>
                            <Text style={styles.consentLabel}>
                                The Health Insurance Portability &
                                Accountability Act of 1996 (HIPAA) is a Federal
                                program that requires that all medical records
                                and other individually identifiable health
                                information used or disclosed by us in any form,
                                whether electronically, on paper, or orally are
                                kept properly confidential. HIPAA gives you, the
                                patient, the right to understand and control how
                                your Personal Health Information (PHI) is used.
                                HIPAA provides penalties for covered entities
                                that misuse personal health information.
                            </Text>

                            <Text style={styles.consentLabel}>
                                As required by HIPAA, we prepared this
                                explanation of how we are to maintain the
                                privacy of your health information and how we
                                may disclose your personal information.
                            </Text>

                            <View style={styles.flexCol}>
                                <Text>
                                    We may use and disclose your medical records
                                    only for the following purposes (treatment,
                                    payment, and health care operation):
                                </Text>
                                {disclosureList.map((item) => (
                                    <View key={item.id} style={styles.flexRow}>
                                        <Image
                                            src={checkbox || ""}
                                            style={{ width: 30, height: 30 }}
                                        />
                                        <Text style={styles.consentLabel}>
                                            {item.descr}
                                        </Text>
                                    </View>
                                ))}
                            </View>

                            <Text style={styles.consentLabel}>
                                We may also create and distribute de-identified
                                health information by removing all reference to
                                individually identifiable information.
                            </Text>

                            <Text style={styles.consentLabel}>
                                We may contact you, by phone or in writing, to
                                provide appointment reminders or information
                                about treatment alternatives or other
                                health-related benefits and services, in
                                addition to other fundraising communications,
                                that may be of interest to you. You do have the
                                right to "opt out" with respect to receiving
                                fundraising communications from us.
                            </Text>

                            <View style={styles.flexCol}>
                                <Text>
                                    The following use and disclosures of PHI
                                    will only be made pursuant to us receiving a
                                    written authorization from you:
                                </Text>
                                {phidisclosureList.map((item) => (
                                    <View key={item.id} style={styles.flexRow}>
                                        <Image
                                            src={checkbox || ""}
                                            style={{ width: 30, height: 30 }}
                                        />
                                        <Text style={styles.consentLabel}>
                                            {item.descr}
                                        </Text>
                                    </View>
                                ))}
                            </View>

                            <Text style={styles.consentLabel}>
                                You may revoke such authorization in writing,
                                and we are required to honor and abide by that
                                written request, except to the extent that we
                                have already taken actions relying on your prior
                                authorization.
                            </Text>

                            <View style={styles.flexCol}>
                                <Text>
                                    You may have the following rights with
                                    respect to your PHI:
                                </Text>
                                {patientRights.map((item) => (
                                    <View key={item.id} style={styles.flexRow}>
                                        <Image
                                            src={checkbox || ""}
                                            style={{ width: 30, height: 30 }}
                                        />
                                        <Text style={styles.consentLabel}>
                                            {item.descr}
                                        </Text>
                                    </View>
                                ))}
                            </View>

                            <Text style={styles.consentLabel}>
                                If you have paid for services, in full and in
                                advance, and you request that we not disclose
                                PHI related solely to those services to a health
                                plan, we will accommodate your request, except
                                where we are required by law to make a
                                disclosure.
                            </Text>

                            <Text style={styles.consentLabel}>
                                We are required by law to maintain the privacy
                                of your Protected Health Information and to
                                provide you the notice of our legal duties and
                                our privacy practice with respect to PHI.
                            </Text>

                            <Text style={styles.consentLabel}>
                                You have recourse if you feel that your
                                protections have been violated by our office.
                                You have the right to file a formal, written
                                complaint with the office and with the
                                Department of Health and Human Services, Office
                                of Civil Rights. We will not retaliate against
                                you for filing a complaint.
                            </Text>

                            <Text style={styles.consentLabel}>
                                Feel free to contact the Practice Compliance
                                Officer (insert name and telephone number) for
                                more information, in person or in writing.
                            </Text>
                        </View>
                    </View>

                    {/* Agreement Confirmation */}
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionHeader}>Confirmation</Text>

                        <View style={styles.flexCol}>
                            <View style={styles.flexRow}>
                                <Image
                                    src={checkbox || ""}
                                    style={{ width: 30, height: 30 }}
                                />
                                <Text style={styles.consentLabel}>
                                    {`This notice is effective from, ${consent.noticeEffectDate.value} and it is our intention to abide by the terms of the Notice of Privacy Practices and HIPAA Regulations currently in effect. We reserve the right to change the terms of our Notice of Privacy Practice and to make the new notice provision effective for all PHI that we maintain. We will post and you may request a written copy of the revised Notice of Privacy Practice from our office.`}
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
