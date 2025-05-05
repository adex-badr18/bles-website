import { MdCheck } from "react-icons/md";

export const CheckMarkIcon = ({ ...rest }) => {
    return (
        <div className="text-darkBlue group-hover:text-white bg-[#f4f9fc] group-hover:bg-deepGreen p-2 transition-colors duration-300">
            <MdCheck className="" />
        </div>
    );
};
