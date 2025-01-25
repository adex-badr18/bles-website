import React from "react";
import PdfPreview from "../../../../components/PdfPreview";
import previewTemp from "./PreviewTemp";

import state from "../../../../assets/autism.jpg"
import card from "../../../../assets/anxiety.jpg"
import signature from "../../../../assets/signature.jpg";

export const regData = {
    personal: {
        firstName: { title: "First Name:", value: "Yahkub" },
        middleName: { title: "Middle Name:", value: "" },
        lastName: { title: "Last Name:", value: "Ibrahim" },
        gender: { title: "Gender:", value: "Male" },
        dob: {
            title: "Date of Birth:",
            value: new Date().toLocaleDateString(),
        },
        maritalStatus: { title: "Marital Status:", value: "Single" },
        socialSecurityNumber: {
            title: "Social Security Number:",
            value: "546789",
        },
        homePhone: { title: "Home Phone:", value: "546789" },
        cellPhone: { title: "Cell Phone:", value: "546789" },
        workPhone: { title: "Work Phone:", value: "546789" },
        preferredPhone: { title: "Preferred Phone:", value: "Cell" },
        appointmentReminderMode: {
            title: "Appointment Reminder Mode:",
            value: "Email",
        },
        email: { title: "Email:", value: "kay@yahoo.com" },
        streetAddress: { title: "Street Address", value: "3, Adeniyi Adebowale Street, Oke-gada" },
        city: { title: "City:", value: "Ede" },
        state: { title: "State:", value: "Osun" },
        zipCode: { title: "Zip Code:", value: "123456" },
        sendMsgToHomePhone: {
            title: "Leave message on home phone:",
            value: "Yes",
        },
        sendMsgToRelative: {
            title: "Leave message with relatives:",
            value: "Yes",
        },
        sendMsgToWork: { title: "Leave message on work phone:", value: "Yes" },
        sendMsgToCellPhone: {
            title: "Leave message on cell phone:",
            value: "Yes",
        },
        
        highestEduLevel: {
            title: "Highest Level of Education:",
            value: "Bachelors Degree",
        },
        employmentStatus: { title: "Employment Status:", value: "Employed" },
        employer: { title: "Employer:", value: "Scrimba Nig. Limited" },
        occupation: { title: "Occupation:", value: "Lawyer" },
        religion: { title: "Religion:", value: "Islam" },
        ethnicity: { title: "Ethnicity:", value: "Black" },
        race: { title: "Race:", value: "Not Hispano" },
        preferredLanguage: { title: "Preferred Language:", value: "English" },
    },
    guarantor: {
        firstName: { title: "First Name:", value: "Yunus" },
        // middleName: {title: "Middle Name:", value: ""},
        lastName: { title: "Last Name:", value: "Ibrahim" },
        dob: {
            title: "Date of Birth:",
            value: new Date().toLocaleDateString(),
        },
        relationship: { title: "Relationship:", value: "Uncle" },
        streetAddress: { title: "Street Address", value: "3, Adeniyi Street" },
        city: { title: "City:", value: "Ede" },
        state: { title: "State:", value: "Osun" },
        zipCode: { title: "Zip Code:", value: "123456" },
        phone: { title: "Phone Number:", value: "1234654" },
        email: { title: "Email:", value: "tuks@gmail.com" },
        stateIssuedId: { title: "State Issued ID:", value: state },
        insuranceCard: { title: "Insurance Card:", value: card },
    },
    parent: {
        firstName: { title: "First Name:", value: "Yunus" },
        // middleName: {title: "Middle Name:", value: ""},
        lastName: { title: "Last Name:", value: "Ibrahim" },
        gender: { title: "Gender:", value: "Male" },
        maritalStatus: { title: "Marital Status:", value: "Married" },
        phone: { title: "Phone Number:", value: "546789" },
        email: { title: "Email:", value: "tuks@gmail.com" },
        streetAddress: { title: "Street Address", value: "3, Adeniyi Street" },
        city: { title: "City:", value: "Ede" },
        state: { title: "State:", value: "Osun" },
        zipCode: { title: "Zip Code:", value: "123456" },
        familyRole: { title: "Family Role:", value: "Father" },
        employmentStatus: { title: "Employment Status:", value: "Retired" },
        employer: { title: "Employer:", value: "Scrimba Nig. Ltd." },
        occupation: { title: "Occupation", value: "Engineer" },
    },
    emergency: {
        firstName: { title: "First Name:", value: "Yunus" },
        // middleName: {title: "Middle Name:", value: ""},
        lastName: { title: "Last Name:", value: "Ibrahim" },
        relationship: { title: "Relationship:", value: "Brother" },
        streetAddress: { title: "Street Address", value: "3, Adeniyi Street" },
        city: { title: "City:", value: "Ede" },
        state: { title: "State:", value: "Osun" },
        zipCode: { title: "Zip Code:", value: "123456" },
        homePhone: { title: "Home Phone", value: "2345657" },
        cellPhone: { title: "Cell Phone:", value: "345676659" },
        email: { title: "Email:", value: "tuns@yahoo.com" },
    },
    primaryInsurance: {
        policyHolderFirstName: { title: "First Name:", value: "Yunus" },
        policyHolderMiddleName: { title: "Middle Name:", value: "" },
        policyHolderLastName: { title: "Last Name:", value: "Ibrahim" },
        policyHolderRelationship: {
            title: "Relationship to Patient:",
            value: "Father",
        },
        policyHolderPhone: { title: "Phone:", value: "12345678" },
        policyHolderDob: { title: "Date of Birth:", value: "01/01/1980" },
        insuranceProviderName: { title: "Provider Name:", value: "Medicare" },
        insuranceProviderPhone: { title: "Phone:", value: "098767890" },
        policyId: { title: "Policy ID:", value: "23456787" },
        groupNumber: { title: "Group Number:", value: "97655" },
        authorizationId: {
            title: "Authorization/Pre-Approval Number:",
            value: "4567887",
        },
        coPay: { title: "Co-pay:", value: "100000" },
        coverageStartDate: {
            title: "Coverage Start Date:",
            value: "01/01/2020",
        },
        coverageEndDate: { title: "Coverage End Date:", value: "01/01/2027" },
        streetAddress: { title: "Street Address", value: "3, Adeniyi Street" },
        city: { title: "City:", value: "Ede" },
        state: { title: "State:", value: "Osun" },
        zipCode: { title: "Zip Code:", value: "123456" },
    },
    secondaryInsurance: {
        policyHolderFirstName: { title: "First Name:", value: "Yunus" },
        policyHolderMiddleName: { title: "Middle Name:", value: "" },
        policyHolderLastName: { title: "Last Name:", value: "Ibrahim" },
        policyHolderRelationship: {
            title: "Relationship to Patient:",
            value: "Father",
        },
        policyHolderPhone: { title: "Phone:", value: "12345678" },
        policyHolderDob: { title: "Date of Birth:", value: "01/01/1980" },
        insuranceProviderName: { title: "Provider Name:", value: "Medicare" },
        insuranceProviderPhone: { title: "Phone:", value: "098767890" },
        policyId: { title: "Policy ID:", value: "23456787" },
        groupNumber: { title: "Group Number:", value: "97655" },
        authorizationId: {
            title: "Authorization/Pre-Approval Number:",
            value: "4567887",
        },
        coPay: { title: "Co-pay:", value: "100000" },
        haveCoordinationBenefits: {
            title: "Do you have coordination of benefits:",
            value: "No",
        },
        coverageStartDate: {
            title: "Coverage Start Date:",
            value: "01/01/2020",
        },
        coverageEndDate: { title: "Coverage End Date:", value: "01/01/2027" },
        streetAddress: { title: "Street Address", value: "3, Adeniyi Street" },
        city: { title: "City:", value: "Ede" },
        state: { title: "State:", value: "Osun" },
        zipCode: { title: "Zip Code:", value: "123456" },
    },
    consent: {
        signature: { title: "Signature:", value: signature },
        date: {
            title: "Date of Birth:",
            value: new Date().toLocaleDateString(),
        },
    },
};

const Preview = ({ formData }) => {
    return <previewTemp />;
};

export default Preview;
