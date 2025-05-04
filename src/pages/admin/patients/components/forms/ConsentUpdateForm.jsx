import ConsentForm from "../../../../user/patientForms/components/patientReg/ConsentForm";

const ConsentUpdateForm = ({ formData, onChange, consents, setConsents }) => {
    return (
        <div className="">
            <ConsentForm
                formData={formData}
                handleInputChange={onChange}
                consentData={consents}
                setConsentData={setConsents}
            />

            {/* <SubmitButton
                isDisabled={isPending}
                isSubmitting={isPending}
                loadingText="Updating"
                onSubmit={handleSubmit}
                submitText="Update Personal Info"
            /> */}
        </div>
    );
};

export default ConsentUpdateForm;
