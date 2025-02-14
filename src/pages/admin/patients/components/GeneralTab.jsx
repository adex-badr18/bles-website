import FieldItem from "../../../../components/FieldItem";
import Section from "./Section";
import { convertToUSDateTime } from "../../utils";

const GeneralTab = ({ patient }) => {
    return (
        <div className="">
            <Section title="Personal Information">
                <FieldItem
                    label="First Name"
                    value={patient.personal.firstName}
                />
                <FieldItem
                    label="Middle Name"
                    value={patient.personal.middleName}
                />
                <FieldItem
                    label="Last Name"
                    value={patient.personal.lastName}
                />
                <FieldItem label="Gender" value={patient.personal.gender} />
                <FieldItem
                    label="Date of Birth"
                    value={convertToUSDateTime(patient.personal.dob, false)}
                />
                <FieldItem
                    label="Marital Status"
                    value={patient.personal.maritalStatus}
                />
                <FieldItem
                    label="Social Security Number"
                    value={patient.personal.socialSecurityNumber}
                />
                <FieldItem
                    label="Home Phone"
                    value={patient.personal.homePhone}
                />
                <FieldItem
                    label="Cell Phone"
                    value={patient.personal.cellPhone}
                />
                <FieldItem
                    label="Work Phone"
                    value={patient.personal.workPhone}
                />
                <FieldItem
                    label="Preferred Phone"
                    value={patient.personal.preferredPhone}
                />
                <FieldItem
                    label="Appointment Reminder Mode"
                    value={patient.personal.appointmentReminderMode}
                />
                <FieldItem label="Email" value={patient.personal.email} />
                <FieldItem
                    label="Leave message on home phone?"
                    value={patient.personal.sendMsgToHomePhone}
                />
                <FieldItem
                    label="Leave message with relatives?"
                    value={patient.personal.sendMsgToRelative}
                />
                <FieldItem
                    label="Leave message on work phone?"
                    value={patient.personal.sendMsgToWork}
                />
                <FieldItem
                    label="Leave message on cell phone?"
                    value={patient.personal.sendMsgToCellPhone}
                />
                <FieldItem
                    label="Address"
                    value={patient.personal.address.streetName}
                />
                <FieldItem label="City" value={patient.personal.address.city} />
                <FieldItem
                    label="State"
                    value={patient.personal.address.state}
                />
                <FieldItem
                    label="Zip Code"
                    value={patient.personal.address.zipCode}
                />
                <FieldItem
                    label="Highest Level of Education"
                    value={patient.personal.highestEduLevel}
                />
                <FieldItem
                    label="Employment Status"
                    value={patient.personal.employmentStatus}
                />
                <FieldItem label="Employer" value={patient.personal.employer} />
                <FieldItem
                    label="Occupation"
                    value={patient.personal.occupation}
                />
                <FieldItem label="Religion" value={patient.personal.religion} />
                <FieldItem
                    label="Ethnicity"
                    value={patient.personal.ethnicity}
                />
                <FieldItem label="Race" value={patient.personal.race} />
                <FieldItem
                    label="Preferred Language"
                    value={patient.personal.preferredLanguage}
                />
            </Section>

            <Section title="Guarantor">
                <FieldItem
                    label="First Name"
                    value={patient.guarantor.firstName}
                />
                <FieldItem
                    label="Last Name"
                    value={patient.guarantor.lastName}
                />
                <FieldItem
                    label="Date of Birth"
                    value={convertToUSDateTime(patient.guarantor.dob, false)}
                />
                <FieldItem
                    label="Relationship"
                    value={patient.guarantor.relationship}
                />
                <FieldItem
                    label="Phone Number"
                    value={patient.guarantor.phone}
                />
                <FieldItem label="Email" value={patient.guarantor.email} />
                <FieldItem
                    label="Address"
                    value={patient.guarantor.address.streetName}
                />
                <FieldItem
                    label="City"
                    value={patient.guarantor.address.city}
                />
                <FieldItem
                    label="State"
                    value={patient.guarantor.address.state}
                />
                <FieldItem
                    label="Zip Code"
                    value={patient.guarantor.address.zipCode}
                />
                <FieldItem
                    label="State Issued ID"
                    src={patient.guarantor.stateIssuedId}
                />
                <FieldItem
                    label="Insurance Card"
                    src={patient.guarantor.insuranceCard}
                />
            </Section>

            <Section title="Parent/Guardian">
                <FieldItem
                    label="First Name"
                    value={patient.parent.firstName}
                />
                <FieldItem label="Last Name" value={patient.parent.lastName} />
                <FieldItem label="Gender" value={patient.parent.gender} />
                <FieldItem
                    label="Marital Status"
                    value={patient.parent.maritalStatus}
                />
                <FieldItem label="Phone Number" value={patient.parent.phone} />
                <FieldItem label="Email" value={patient.parent.email} />
                <FieldItem
                    label="Family Role"
                    src={patient.parent.familyRole}
                />
                <FieldItem
                    label="Employment Status"
                    value={patient.parent.employmentStatus}
                />
                <FieldItem label="Employer" value={patient.parent.employer} />
                <FieldItem
                    label="Occupation"
                    value={patient.parent.occupation}
                />
                <FieldItem
                    label="Address"
                    value={patient.parent.address.streetName}
                />
                <FieldItem label="City" value={patient.parent.address.city} />
                <FieldItem label="State" value={patient.parent.address.state} />
                <FieldItem
                    label="Zip Code"
                    value={patient.parent.address.zipCode}
                />
            </Section>

            <Section title="Emergency">
                <FieldItem
                    label="First Name"
                    value={patient.emergency.firstName}
                />
                <FieldItem
                    label="Last Name"
                    value={patient.emergency.lastName}
                />
                <FieldItem
                    label="Home Phone"
                    value={patient.emergency.homePhone}
                />
                <FieldItem
                    label="Cell Phone"
                    value={patient.emergency.cellPhone}
                />
                <FieldItem label="Email" value={patient.emergency.email} />
                <FieldItem
                    label="Relationship"
                    value={patient.emergency.relationship}
                />
                <FieldItem
                    label="Address"
                    value={patient.emergency.address.streetName}
                />
                <FieldItem
                    label="City"
                    value={patient.emergency.address.city}
                />
                <FieldItem
                    label="State"
                    value={patient.emergency.address.state}
                />
                <FieldItem
                    label="Zip Code"
                    value={patient.emergency.address.zipCode}
                />
            </Section>

            <div className="bg-offWhite p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-lg font-semibold mb-2">Insurance</h2>
                <FieldItem
                    label="Payment Method"
                    value={patient.insurance.paymentMode}
                />

                <h2 className="text-lg font-semibold mt-4 md:mt-8 mb-2">
                    Primary Insurance
                </h2>

                {patient.insurance.paymentMode.toLowerCase() !== "self pay" ? (
                    <div className="">
                        <h3 className="text-base font-medium mb-2">
                            Policy Holder
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <FieldItem
                                label="First Name"
                                value={
                                    patient.insurance.primaryInsurance
                                        .policyHolder.firstName
                                }
                            />
                            <FieldItem
                                label="Middle Name"
                                value={
                                    patient.insurance.primaryInsurance
                                        .policyHolder.middleName
                                }
                            />
                            <FieldItem
                                label="Last Name"
                                value={
                                    patient.insurance.primaryInsurance
                                        .policyHolder.lastName
                                }
                            />
                            <FieldItem
                                label="Relationship"
                                value={
                                    patient.insurance.primaryInsurance
                                        .policyHolder.relationship
                                }
                            />
                            <FieldItem
                                label="Phone Number"
                                value={
                                    patient.insurance.primaryInsurance
                                        .policyHolder.phone
                                }
                            />
                            <FieldItem
                                label="Date of Birth"
                                value={convertToUSDateTime(
                                    patient.insurance.primaryInsurance
                                        .policyHolder.dob
                                )}
                            />
                        </div>

                        <h3 className="text-base font-medium mt-4 md:mt-8 mb-2">
                            Insurance Provider
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FieldItem
                                label="Name"
                                value={
                                    patient.insurance.primaryInsurance
                                        .insuranceProvider.name
                                }
                            />
                            <FieldItem
                                label="Phone Number"
                                value={
                                    patient.insurance.primaryInsurance
                                        .insuranceProvider.phone
                                }
                            />
                            <FieldItem
                                label="Policy ID"
                                value={
                                    patient.insurance.primaryInsurance
                                        .insuranceProvider.policyId
                                }
                            />
                            <FieldItem
                                label="Group Number"
                                value={
                                    patient.insurance.primaryInsurance
                                        .insuranceProvider.lastName
                                }
                            />
                            <FieldItem
                                label="Authorization ID"
                                value={
                                    patient.insurance.primaryInsurance
                                        .insuranceProvider.authorizationId
                                }
                            />
                            <FieldItem
                                label="Co-Pay"
                                value={
                                    patient.insurance.primaryInsurance
                                        .insuranceProvider.coPay
                                }
                            />
                            <FieldItem
                                label="Coverage Start Date"
                                value={convertToUSDateTime(
                                    patient.insurance.primaryInsurance
                                        .insuranceProvider.coverageStartDate
                                )}
                            />
                            <FieldItem
                                label="Coverage End Date"
                                value={convertToUSDateTime(
                                    patient.insurance.primaryInsurance
                                        .insuranceProvider.coverageEndDate
                                )}
                            />
                            <FieldItem
                                label="Address"
                                value={
                                    patient.insurance.primaryInsurance
                                        .insuranceProvider.address.streetName
                                }
                            />
                            <FieldItem
                                label="City"
                                value={
                                    patient.insurance.primaryInsurance
                                        .insuranceProvider.address.city
                                }
                            />
                            <FieldItem
                                label="State"
                                value={
                                    patient.insurance.primaryInsurance
                                        .insuranceProvider.address.state
                                }
                            />
                            <FieldItem
                                label="Zip Code"
                                value={
                                    patient.insurance.primaryInsurance
                                        .insuranceProvider.address.zipCode
                                }
                            />
                        </div>
                    </div>
                ) : (
                    <div className="mt-8">Primary insurance not available</div>
                )}
            </div>

            <div className="bg-offWhite p-4 rounded-lg shadow-md mb-6">
                <h2 className="text-lg font-semibold mb-2">
                    Secondary Insurance
                </h2>
                {patient.insurance.paymentMode.toLowerCase() !== "self pay" ? (
                    <div className="">
                        <h3 className="text-base font-medium mb-2">
                            Policy Holder
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <FieldItem
                                label="First Name"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .policyHolder.firstName
                                }
                            />
                            <FieldItem
                                label="Middle Name"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .policyHolder.middleName
                                }
                            />
                            <FieldItem
                                label="Last Name"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .policyHolder.lastName
                                }
                            />
                            <FieldItem
                                label="Relationship"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .policyHolder.relationship
                                }
                            />
                            <FieldItem
                                label="Phone Number"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .policyHolder.phone
                                }
                            />
                            <FieldItem
                                label="Date of Birth"
                                value={convertToUSDateTime(
                                    patient.insurance.secondaryInsurance
                                        .policyHolder.dob
                                )}
                            />
                        </div>

                        <h3 className="text-base font-medium mb-2">
                            Insurance Provider
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <FieldItem
                                label="Name"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .insuranceProvider.name
                                }
                            />
                            <FieldItem
                                label="Phone Number"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .insuranceProvider.phone
                                }
                            />
                            <FieldItem
                                label="Policy ID"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .insuranceProvider.policyId
                                }
                            />
                            <FieldItem
                                label="Group Number"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .insuranceProvider.lastName
                                }
                            />
                            <FieldItem
                                label="Authorization ID"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .insuranceProvider.authorizationId
                                }
                            />
                            <FieldItem
                                label="Co-Pay"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .insuranceProvider.coPay
                                }
                            />
                            <FieldItem
                                label="Coverage Start Date"
                                value={convertToUSDateTime(
                                    patient.insurance.secondaryInsurance
                                        .insuranceProvider.coverageStartDate
                                )}
                            />
                            <FieldItem
                                label="Coverage End Date"
                                value={convertToUSDateTime(
                                    patient.insurance.secondaryInsurance
                                        .insuranceProvider.coverageEndDate
                                )}
                            />
                            <FieldItem
                                label="Have Coordination of Benefits?"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .insuranceProvider
                                        .haveCoordinationBenefits
                                }
                            />
                            <FieldItem
                                label="Address"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .insuranceProvider.address.streetName
                                }
                            />
                            <FieldItem
                                label="City"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .insuranceProvider.address.city
                                }
                            />
                            <FieldItem
                                label="State"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .insuranceProvider.address.state
                                }
                            />
                            <FieldItem
                                label="Zip Code"
                                value={
                                    patient.insurance.secondaryInsurance
                                        .insuranceProvider.address.zipCode
                                }
                            />
                        </div>
                    </div>
                ) : (
                    <div>Secondary insurance not available</div>
                )}
            </div>
        </div>
    );
};

export default GeneralTab;
