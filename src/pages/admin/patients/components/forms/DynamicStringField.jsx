import { FlexContactInfo } from "../../../../../components/FlexItem";
import { BsDot } from "react-icons/bs";

const DynamicStringField = ({ title, data, emptyListDescr }) => {
    return (
        <div className="space-y-4">
            {title && (
                <h4 className="text-lg text-darkBlue font-medium capitalize">
                    {title}
                </h4>
            )}
            <div className="space-y-1">
                {data.length < 1 ? (
                    <div className="">{emptyListDescr}</div>
                ) : (
                    data.map((checkText, index) => (
                        <FlexContactInfo
                            key={index}
                            icon={<BsDot className="text-darkBlue text-2xl" />}
                            classAttrs="text-deepGrey"
                        >
                            {checkText}
                        </FlexContactInfo>
                    ))
                )}
            </div>
        </div>
    );
};

export default DynamicStringField;
