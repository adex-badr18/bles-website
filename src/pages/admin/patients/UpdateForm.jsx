import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import MultiStepForm from "../../../components/MultiStepForm";
import PersonalStep from "../../user/patientForms/components/patientReg/PersonalStep";
import OtherContactsForm from "../../user/patientForms/components/patientReg/OtherContactsForm";
import InsuranceForm from "../../user/patientForms/components/patientReg/InsuranceForm";
import ConsentForm from "../../user/patientForms/components/patientReg/ConsentForm";
import PdfPreview from "../../../components/PdfPreview";
import PdfDoc from "../../user/patientForms/components/patientReg/PdfDoc";
import PageTitle from "../components/PageTitle";

const UpdateForm = () => {
    const patientData = useLoaderData();
    const [consents, setConsents] = useState({
        dataAccuracy: true,
        insuranceAuth: true,
        finResponsible: true,
        infoRelease: true,
    });
    const [formData, setFormData] = useState({
        personal: {
            firstName: patientData.personal.firstName || "",
            middleName: patientData.personal.middleName || "",
            lastName: patientData.personal.lastName || "",
            gender: patientData.personal.gender || "",
            dob: new Date(patientData.personal.dob) || "",
            maritalStatus: patientData.personal.maritalStatus || "",
            socialSecurityNumber:
                patientData.personal.socialSecurityNumber || "",
            homePhone: patientData.personal.homePhone || "",
            cellPhone: patientData.personal.cellPhone || "",
            workPhone: patientData.personal.workPhone || "",
            preferredPhone: patientData.personal.preferredPhone || "",
            appointmentReminderMode:
                patientData.personal.appointmentReminderMode || "",
            email: patientData.personal.email || "",
            sendMsgToHomePhone: patientData.personal.sendMsgToHomePhone || "",
            sendMsgToRelative: patientData.personal.sendMsgToRelative || "",
            sendMsgToWork: patientData.personal.sendMsgToWork || "",
            sendMsgToCellPhone: patientData.personal.sendMsgToCellPhone || "",
            address: {
                streetName: patientData.personal.address.streetName || "",
                city: patientData.personal.address.city || "",
                state: patientData.personal.address.state || "",
                zipCode: patientData.personal.address.zipCode || "",
            },
            highestEduLevel: patientData.personal.highestEduLevel || "",
            employmentStatus: patientData.personal.employmentStatus || "",
            employer: patientData.personal.employer || "",
            occupation: patientData.personal.occupation || "",
            religion: patientData.personal.religion || "",
            ethnicity: patientData.personal.ethnicity || "",
            race: patientData.personal.race || "",
            preferredLanguage: patientData.personal.preferredLanguage || "",
        },
        guarantor: {
            firstName: patientData.guarantor.firstName || "",
            // middleName: patientData.guarantor.firstName || "",
            lastName: patientData.guarantor.lastName || "",
            dob: new Date(patientData.guarantor.dob) || "",
            relationship: patientData.guarantor.relationship || "",
            address: {
                streetName:
                    patientData.guarantor.address.streetNamefirstName || "",
                city: patientData.guarantor.address.city || "",
                state: patientData.guarantor.address.state || "",
                zipCode: patientData.guarantor.address.zipCode || "",
            },
            phone: patientData.guarantor.phone || "",
            email: patientData.guarantor.email || "",
            stateIssuedId: patientData.guarantor.stateIssuedId || "",
            insuranceCard: patientData.guarantor.insuranceCard || "",
        },
        parent: {
            firstName: patientData.parent.firstName || "",
            // middleName: patientData.parent.firstName || "",
            lastName: patientData.parent.lastName || "",
            gender: patientData.parent.gender || "",
            maritalStatus: patientData.parent.maritalStatus || "",
            phone: patientData.parent.phone || "",
            email: patientData.parent.email || "",
            familyRole: patientData.parent.familyRole || "",
            employmentStatus: patientData.parent.employmentStatus || "",
            employer: patientData.parent.employer || "",
            occupation: patientData.parent.occupation || "",
            address: {
                streetName: patientData.parent.address.streetName || "",
                city: patientData.parent.address.city || "",
                state: patientData.parent.address.state || "",
                zipCode: patientData.parent.address.zipCode || "",
            },
        },
        emergency: {
            firstName: patientData.emergency.firstName || "",
            // middleName: patientData.emergency.firstName || "",
            lastName: patientData.emergency.lastName || "",
            relationship: patientData.emergency.relationship || "",
            address: {
                streetName: patientData.emergency.address.streetName || "",
                city: patientData.emergency.address.city || "",
                state: patientData.emergency.address.state || "",
                zipCode: patientData.emergency.address.zipCode || "",
            },
            homePhone: patientData.emergency.homePhone || "",
            cellPhone: patientData.emergency.cellPhone || "",
            email: patientData.emergency.email || "",
        },
        insurance: {
            paymentMode: patientData.insurance.paymentMode || "",
            primaryInsurance: {
                policyHolder: {
                    firstName:
                        patientData.insurance.primaryInsurance.policyHolder
                            .firstName || "",
                    middleName:
                        patientData.insurance.primaryInsurance.policyHolder
                            .middleName || "",
                    lastName:
                        patientData.insurance.primaryInsurance.policyHolder
                            .lastName || "",
                    relationship:
                        patientData.insurance.primaryInsurance.policyHolder
                            .relationship || "",
                    phone:
                        patientData.insurance.primaryInsurance.policyHolder
                            .phone || "",
                    dob:
                        new Date(
                            patientData.insurance.primaryInsurance.policyHolder.dob
                        ).toLocaleDateString() || "",
                },
                insuranceProvider: {
                    name:
                        patientData.insurance.primaryInsurance.insuranceProvider
                            .name || "",
                    phone:
                        patientData.insurance.primaryInsurance.insuranceProvider
                            .phone || "",
                    policyId:
                        patientData.insurance.primaryInsurance.insuranceProvider
                            .policyId || "",
                    groupNumber:
                        patientData.insurance.primaryInsurance.insuranceProvider
                            .groupNumber || "",
                    authorizationId:
                        patientData.insurance.primaryInsurance.insuranceProvider
                            .authorizationId || "",
                    coPay:
                        patientData.insurance.primaryInsurance.insuranceProvider
                            .coPay || "",
                    coverageStartDate:
                        new Date(
                            patientData.insurance.primaryInsurance.insuranceProvider.coverageStartDate
                        ).toLocaleDateString() || "",
                    coverageEndDate:
                        new Date(
                            patientData.insurance.primaryInsurance.insuranceProvider.coverageEndDate
                        ).toLocaleDateString() || "",
                    address: {
                        streetName:
                            patientData.insurance.primaryInsurance
                                .insuranceProvider.address.streetName || "",
                        city:
                            patientData.insurance.primaryInsurance
                                .insuranceProvider.address.city || "",
                        state:
                            patientData.insurance.primaryInsurance
                                .insuranceProvider.address.state || "",
                        zipCode:
                            patientData.insurance.primaryInsurance
                                .insuranceProvider.address.zipCode || "",
                    },
                },
            },
            secondaryInsurance: {
                policyHolder: {
                    firstName:
                        patientData.insurance.secondaryInsurance.policyHolder
                            .firstName || "",
                    middleName:
                        patientData.insurance.secondaryInsurance.policyHolder
                            .middleName || "",
                    lastName:
                        patientData.insurance.secondaryInsurance.policyHolder
                            .lastName || "",
                    relationship:
                        patientData.insurance.secondaryInsurance.policyHolder
                            .relationship || "",
                    phone:
                        patientData.insurance.secondaryInsurance.policyHolder
                            .phone || "",
                    dob:
                        new Date(
                            patientData.insurance.secondaryInsurance.policyHolder.dob
                        ).toLocaleDateString() || "",
                },
                insuranceProvider: {
                    name:
                        patientData.insurance.secondaryInsurance
                            .insuranceProvider.name || "",
                    phone:
                        patientData.insurance.secondaryInsurance
                            .insuranceProvider.phone || "",
                    policyId:
                        patientData.insurance.secondaryInsurance
                            .insuranceProvider.policyId || "",
                    groupNumber:
                        patientData.insurance.secondaryInsurance
                            .insuranceProvider.groupNumber || "",
                    authorizationId:
                        patientData.insurance.secondaryInsurance
                            .insuranceProvider.authorizationId || "",
                    coverageStartDate:
                        new Date(
                            patientData.insurance.secondaryInsurance.insuranceProvider.coverageStartDate
                        ).toLocaleDateString() || "",
                    coverageEndDate:
                        new Date(
                            patientData.insurance.secondaryInsurance.insuranceProvider.coverageEndDate
                        ).toLocaleDateString() || "",
                    haveCoordinationBenefits:
                        patientData.insurance.secondaryInsurance
                            .insuranceProvider.haveCoordinationBenefits || "",
                    address: {
                        streetName:
                            patientData.insurance.secondaryInsurance
                                .insuranceProvider.address.streetName || "",
                        city:
                            patientData.insurance.secondaryInsurance
                                .insuranceProvider.address.city || "",
                        state:
                            patientData.insurance.secondaryInsurance
                                .insuranceProvider.address.state || "",
                        zipCode:
                            patientData.insurance.secondaryInsurance
                                .insuranceProvider.address.zipCode || "",
                    },
                    coPay:
                        patientData.insurance.secondaryInsurance
                            .insuranceProvider.coPay || "",
                },
            },
        },
        consent: {
            signature: "",
            date: "",
        },
    });

    // Handle form element change
    const handleFormElementChange = (section, fieldPath, value) => {
        setFormData((prev) => {
            const keys = fieldPath.split(".");

            const updateNestedField = (obj, keys, value) => {
                if (keys.length === 1) {
                    return {
                        ...obj,
                        [keys[0]]: value,
                    };
                }

                return {
                    ...obj,
                    [keys[0]]: updateNestedField(
                        obj[keys[0]],
                        keys.slice(1),
                        value
                    ),
                };
            };

            return {
                ...prev,
                [section]: updateNestedField(prev[section], keys, value),
            };
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    // console.log(formData);
    // console.log(consents);

    const formSteps = {
        steps: [
            "Personal",
            "Other Contacts",
            "Insurance",
            "Consent",
            "Preview",
        ],
        forms: [
            {
                id: 1,
                name: "Personal",
                component: (
                    <PersonalStep
                        key={1}
                        formData={formData}
                        handleInputChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 2,
                name: "Other Contacts",
                component: (
                    <OtherContactsForm
                        key={2}
                        formData={formData}
                        handleInputChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 3,
                name: "Insurance",
                component: (
                    <InsuranceForm
                        key={3}
                        formData={formData}
                        handleInputChange={handleFormElementChange}
                    />
                ),
            },
            {
                id: 4,
                name: "Consent",
                component: (
                    <ConsentForm
                        key={4}
                        consentData={consents}
                        setConsentData={setConsents}
                        handleInputChange={handleFormElementChange}
                        formData={formData}
                    />
                ),
            },
            {
                id: 5,
                name: "Preview",
                component: (
                    <PdfPreview key={5} Doc={<PdfDoc data={formData} />} />
                ),
            },
        ],
    };

    return (
        <section className="space-y-4 md:spce-y-8">
            <PageTitle title="Update Registration Information" />
            <MultiStepForm
                formData={formData}
                formSize="md"
                optionalFields={[]}
                stepForms={formSteps.forms}
                steps={formSteps.steps}
                submitHandler={submitHandler}
            />
        </section>
    );
};

export default UpdateForm;
