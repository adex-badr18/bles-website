import { ImArrowUp } from "react-icons/im";
import { FaUserInjured } from "react-icons/fa6";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";

const StatCard = ({ title, entity, value, numOfNew }) => {
    let icon;

    if (entity === "Registered Patients") {
        icon = <FaUserInjured className="text-sm text-lightGreen" />;
    } else if (entity === "Scheduled Appointments") {
        icon = <RiCalendarScheduleLine className="text-sm text-lightGreen" />;
    } else if (entity === "Client Feebacks") {
        icon = <VscFeedback className="text-sm text-lightGreen" />;
    }

    return (
        <div className="p-4 space-y-5 rounded-lg border border-lightGreen bg-offWhite">
            <h4 className="text-darkBlue font-medium">{title}</h4>
            <h3 className="text-lightGreen text-3xl font-bold">{value}</h3>
            <div className="flex items-center gap-2">
                {icon}
                <span className="text-sm text-grey">{`${entity}`}</span>
            </div>
        </div>
    );
};

export default StatCard;
