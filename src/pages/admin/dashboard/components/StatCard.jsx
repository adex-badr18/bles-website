import { ImArrowUp } from "react-icons/im";

const StatCard = ({ title, entity, value, numOfNew }) => {
    let pluralSuffix;

    if (numOfNew > 1) {
        pluralSuffix = "s";
    } else {
        pluralSuffix = "";
    }

    return (
        <div className="p-4 space-y-5 rounded-lg border border-lightGreen bg-offWhite">
            <h4 className="text-darkBlue font-medium">{title}</h4>
            <h3 className="text-lightGreen text-3xl font-bold">
                {value}
            </h3>
            <div className="flex items-center gap-1">
                <ImArrowUp className="text-xs text-lightGreen" />
                <span className="text-xs text-grey">{`${numOfNew} new ${entity}${pluralSuffix}`}</span>
            </div>
        </div>
    );
};

export default StatCard;
