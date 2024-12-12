const FlexItem = ({ icon, title, text, classAttrs }) => {
    return (
        <div className={`flex gap-2 items-center ${classAttrs}`}>
            {icon}
            <p className="font-rubi text-white text-s">
                <span className="font-bold">
                    {title}
                    {": "}
                </span>
                <span className="">{text}</span>
            </p>
        </div>
    );
};

export const FlexContactInfo = ({ children, icon, classAttrs }) => {
    return (
        <div className={`flex items-center gap-2 ${classAttrs}`}>
            {icon}
            <p className="">{children}</p>
        </div>
    );
};

export default FlexItem;
