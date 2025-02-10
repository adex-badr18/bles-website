import TextField from "../../../../../components/TextField";
import TextAreaField from "../../../../../components/TextAreaField";
import SelectField from "../../../../../components/SelectField";

import { booleanOptions } from "../../data";

const PsychoSocial = ({ formData, onChange }) => {
    return (
        <form className="">
            <div className="space-y-8">
                <h3 className="font-semibold text-xl md:text-2xl text-darkBlue">
                    Psychosocial History
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <TextField
                        type="text"
                        label="Place of Birth"
                        name="birthPlace"
                        placeholder="Place of Birth"
                        section="psychosocialHistory"
                        field="birthPlace"
                        value={formData.psychosocialHistory.birthPlace}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="text"
                        label="Where did you grow up?"
                        name="growthPlace"
                        placeholder="Where did you grow up?"
                        section="psychosocialHistory"
                        field="growthPlace"
                        value={formData.psychosocialHistory.growthPlace}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="text"
                        label="Who raised you?"
                        name="raisedBy"
                        placeholder="Where did you grow up?"
                        section="psychosocialHistory"
                        field="raisedBy"
                        value={formData.psychosocialHistory.raisedBy}
                        handleInputChange={onChange}
                    />

                    <TextField
                        type="number"
                        label="How many siblings did you have?"
                        name="siblingsCount"
                        placeholder="How many siblings did you have?"
                        section="psychosocialHistory"
                        field="siblingsCount"
                        value={formData.psychosocialHistory.siblingsCount}
                        handleInputChange={onChange}
                    />

                    <SelectField
                        label="Has anyone physically abused you?"
                        name="wasPhysicallyAbused"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.psychosocialHistory.wasPhysicallyAbused}
                        section="psychosocialHistory"
                        field="wasPhysicallyAbused"
                        handleSelectChange={onChange}
                    />

                    <SelectField
                        label="Has anyone emotionally abused you?"
                        name="wasEmotionallyAbused"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={
                            formData.psychosocialHistory.wasEmotionallyAbused
                        }
                        section="psychosocialHistory"
                        field="wasEmotionallyAbused"
                        handleSelectChange={onChange}
                    />

                    <SelectField
                        label="Has anyone sexually abused you?"
                        name="wasSexuallyAbused"
                        title="-- Select an option --"
                        data={booleanOptions}
                        value={formData.psychosocialHistory.wasSexuallyAbused}
                        section="psychosocialHistory"
                        field="wasSexuallyAbused"
                        handleSelectChange={onChange}
                    />

                    <TextAreaField
                        label="Describe your childhood"
                        name="childhoodInfo"
                        placeholder="Write detailed description here"
                        section="psychosocialHistory"
                        field="childhoodInfo"
                        value={formData.psychosocialHistory.childhoodInfo}
                        handleFormElementChange={onChange}
                    />
                </div>
            </div>
        </form>
    );
};

export default PsychoSocial;
