import PersonalStep from "../../../../user/patientForms/components/patientReg/PersonalStep";
import SubmitButton from "../../../../../components/SubmitButton";
import { useUpdatePatient } from "../../../../../hooks/usePatients";
import { convertToBoolean, formatToYYYYMMDD } from "../../../../utils";
import { useParams } from "react-router-dom";

const PersonalUpdateForm = ({ formData, onChange }) => {
    const { mutate, isPending, error, data } = useUpdatePatient();
    const {id} = useParams()

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

        // TODO: Update personal info
        mutate({
            patientId: id,
            payload: formattedData,
            endpoint: `patients/forms/register/${id}/personal-info`,
        });
    };

    return (
        <div className="space-y-6 md:space-y-10">
            <PersonalStep formData={formData} handleInputChange={onChange} />
            <SubmitButton
                isDisabled={isPending}
                isSubmitting={isPending}
                loadingText="Updating"
                onSubmit={handleSubmit}
                submitText="Update Personal Info"
            />
        </div>
    );
};

export default PersonalUpdateForm;
