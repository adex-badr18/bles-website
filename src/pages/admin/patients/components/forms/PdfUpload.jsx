import React from "react";
import PdfPreview from "../../../../../components/PdfPreview";
import PdfDoc from "../../../../user/patientForms/components/patientReg/PdfDoc";
import SubmitButton from "../../../../../components/SubmitButton";
import { useUpdatePatient } from "../../../../../hooks/usePatients";

const PdfUpload = ({ formData }) => {
    const { mutate, isPending, error, data } = useUpdatePatient();

    const handleSubmit = () => {
        // Prepare personal info update payload
        const formattedData = {
            ...formData.personal,
            dob: formatToYYYYMMDD(formData.personal.dob),
            sendMsgToHomePhone: convertToBoolean(
                formData.personal.sendMsgToHomePhone
            ),
            sendMsgToRelative: convertToBoolean(
                formData.personal.sendMsgToRelative
            ),
            sendMsgToWork: convertToBoolean(formData.personal.sendMsgToWork),
            sendMsgToCellPhone: convertToBoolean(
                formData.personal.sendMsgToCellPhone
            ),
        };

        console.log(formattedData);

        const formDataPayload = objectToFormData(formattedData);

        // TODO: Update personal info
        mutate({
            patientId: formData?.patientId,
            payload: formDataPayload,
            endpoint: `patients/forms/register/${formData.patientId}/personal-info/${formData.id}`,
        });
    };

    return (
        <div className="space-y-6 md:space-y-10">
            <PdfPreview Doc={<PdfDoc data={formData} />} />
        </div>
    );
};

export default PdfUpload;
