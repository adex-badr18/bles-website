import DateField from "../../../../../components/DateField";
import { Checkbox } from "../../../../../components/CheckboxGroup";
import SignaturePad from "../../../../../components/SignaturePad";
import FieldItem from "../../../../../components/FieldItem";
import { CheckMarkIcon } from "../../../programs/components/icons";
import { disclosureList, patientRights, phidisclosureList } from "./data";

const PrivacyPolicy = ({ formData, onChange, consent, setConsent }) => {
    const patientFullName = `${formData.verification.firstName} ${formData.verification.middleName} ${formData.verification.lastName}`;

    return (
        <div className="space-y-6 md:space-y-10">
            <div className="space-y-4 md:space-y-8">
                <div className="space-y-2">
                    <h3 className="font-bold text-xl md:text-2xl text-darkBlue text-center">
                        Notice of Privacy Practices
                    </h3>

                    <p
                        aria-label="All fields marked asterik (*) are required"
                        className="text-sm text-vividRed font-bold text-center"
                    >
                        All fields marked (*) are required.
                    </p>
                </div>

                <div className="p-4 border rounded-lg space-y-4 md:space-y-8 text-deepGrey">
                    <p className="text-vividRed font-medium text-center">
                        THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU
                        MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO
                        THIS INFORMATION. PLEASE READ IT CAREFULLY.
                    </p>

                    <p className="">
                        The Health Insurance Portability & Accountability Act of
                        1996 (HIPAA) is a Federal program that requires that all
                        medical records and other individually identifiable
                        health information used or disclosed by us in any form,
                        whether electronically, on paper, or orally are kept
                        properly confidential. HIPAA gives you, the patient, the
                        right to understand and control how your Personal Health
                        Information (PHI) is used. HIPAA provides penalties for
                        covered entities that misuse personal health
                        information.
                    </p>

                    <p className="">
                        As required by HIPAA, we prepared this explanation of
                        how we are to maintain the privacy of your health
                        information and how we may disclose your personal
                        information.
                    </p>

                    <div className="space-y-2">
                        <p className="">
                            We may use and disclose your medical records only
                            for the following purposes (treatment, payment, and
                            health care operation):
                        </p>

                        <ul className="space-y-1">
                            {disclosureList.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-start gap-4 group"
                                >
                                    <CheckMarkIcon className="" />

                                    <span className="">{item.descr}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="">
                        We may also create and distribute de-identified health
                        information by removing all reference to individually
                        identifiable information.
                    </p>

                    <p className="">
                        We may contact you, by phone or in writing, to provide
                        appointment reminders or information about treatment
                        alternatives or other health-related benefits and
                        services, in addition to other fundraising
                        communications, that may be of interest to you. You do
                        have the right to "opt out" with respect to receiving
                        fundraising communications from us.
                    </p>

                    <div className="space-y-2">
                        <p className="">
                            The following use and disclosures of PHI will only
                            be made pursuant to us receiving a written
                            authorization from you:
                        </p>

                        <ul className="space-y-1">
                            {phidisclosureList.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-start gap-4 group"
                                >
                                    <CheckMarkIcon className="" />

                                    <span className="">{item.descr}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="">
                        You may revoke such authorization in writing, and we are
                        required to honor and abide by that written request,
                        except to the extent that we have already taken actions
                        relying on your prior authorization.
                    </p>

                    <div className="space-y-2">
                        <p className="">
                            You may have the following rights with respect to
                            your PHI:
                        </p>

                        <ul className="space-y-1">
                            {patientRights.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-start gap-4 group"
                                >
                                    <CheckMarkIcon className="" />

                                    <span className="">{item.descr}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="">
                        If you have paid for services, in full and in advance,
                        and you request that we not disclose PHI related solely
                        to those services to a health plan, we will accommodate
                        your request, except where we are required by law to
                        make a disclosure.
                    </p>

                    <p className="">
                        We are required by law to maintain the privacy of your
                        Protected Health Information and to provide you the
                        notice of our legal duties and our privacy practice with
                        respect to PHI.
                    </p>

                    <p className="">
                        You have recourse if you feel that your protections have
                        been violated by our office. You have the right to file
                        a formal, written complaint with the office and with the
                        Department of Health and Human Services, Office of Civil
                        Rights. We will not retaliate against you for filing a
                        complaint.
                    </p>

                    <p className="">
                        Feel free to contact the Practice Compliance Officer
                        (insert name and telephone number) for more information,
                        in person or in writing.
                    </p>
                </div>
            </div>

            <div className="p-4 border rounded space-y-5">
                <h4 className="text-xl text-darkBlue font-medium">
                    Confirmation
                </h4>

                <DateField
                    label="This notice is effective from"
                    name="noticeEffectDate"
                    field="noticeEffectDate"
                    section="consent"
                    placeholder="MM/DD/YYYY"
                    handleFormElementChange={onChange}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    defaultDate={formData.consent.noticeEffectDate || ""}
                    isRequired={true}
                />

                {formData.consent.noticeEffectDate && (
                    <Checkbox
                        label={`This notice is effective from, ${formData.consent.noticeEffectDate.toLocaleDateString()} and it is our intention to abide by the terms of the Notice of Privacy Practices and HIPAA Regulations currently in effect. We reserve the right to change the terms of our Notice of Privacy Practice and to make the new notice provision effective for all PHI that we maintain. We will post and you may request a written copy of the revised Notice of Privacy Practice from our office.`}
                        value={`This notice is effective from, ${formData.consent.noticeEffectDate.toLocaleDateString()} and it is our intention to abide by the terms of the Notice of Privacy Practices and HIPAA Regulations currently in effect. We reserve the right to change the terms of our Notice of Privacy Practice and to make the new notice provision effective for all PHI that we maintain. We will post and you may request a written copy of the revised Notice of Privacy Practice from our office.`}
                        checked={consent}
                        onChange={() => setConsent((prev) => !prev)}
                        checkedClass="border-2 border-darkBlue"
                        unCheckedClass="border-lightGrey"
                        isRequired={true}
                    />
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    <FieldItem
                        label="Patient's Name"
                        value={patientFullName}
                        colspanClass="col-span-2"
                        isRequired={true}
                    />

                    {formData.consent.date && (
                        <FieldItem
                            label="Date"
                            value={new Date(
                                formData.consent.date
                            ).toLocaleDateString()}
                            isRequired={true}
                        />
                    )}
                </div>

                <div className="space-y-1">
                    <label className="block text-grey">
                        Patient Signature{" "}
                        <small className="text-vividRed text-lg">*</small>
                    </label>
                    <SignaturePad
                        handleInputChange={onChange}
                        section="consent"
                        fieldPath="patientSignature"
                        dateSection="consent"
                        dateFieldPath="date"
                        signature={formData.consent.patientSignature}
                    />
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
