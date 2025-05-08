import React from "react";
import PdfPreview from "../../../../../components/PdfPreview";
import PdfDoc from "../../../../user/patientForms/components/patientReg/PdfDoc";
import SubmitButton from "../../../../../components/SubmitButton";
import { useUploadPatientRegPdf } from "../../../../../hooks/usePatients";
import { pdf } from "@react-pdf/renderer";

const PdfUpload = ({ formData }) => {
    const { mutate, isPending, error, data } = useUploadPatientRegPdf();

    const handleSubmit = async () => {
         // prepare pdf file payload
         const pdfBlob = await pdf(<PdfDoc data={formData} />).toBlob();
         const pdfFile = new File([pdfBlob], "info-consent-and-fin-policy.pdf", {
             type: "application/pdf",
         });

        // Prepare registration update payload
        const formattedData = {
            date: formData.consent.date,
            fileType: "patient-registration-form",
            owner: `${formData.personal.firstName}-${formData.personal.lastName}`,
            file: pdfFile
        };

        // TODO: Upload patient's registration form
        mutate({
            patientId: formData?.identification.patientId,
            payload: formattedData,
        });
    };

    return (
        <div className="space-y-6 md:space-y-10">
            <PdfPreview Doc={<PdfDoc data={formData} />} />

            <SubmitButton
                isDisabled={isPending}
                isSubmitting={isPending}
                loadingText="Uploading..."
                onSubmit={handleSubmit}
                submitText="Upload Registration Form"
            />
        </div>
    );
};

export default PdfUpload;
