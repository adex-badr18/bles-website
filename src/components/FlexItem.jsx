const FlexItem = ({ icon, title, text, classAttrs }) => {
    return (
        <div className={`flex gap-2 items-center ${classAttrs}`}>
            {icon}
            <p className="font-rubi text-white text-s">
                <span className="font-bold">{title}{": "}</span>
                <span className="">{text}</span>
            </p>
        </div>
    );
};

export default FlexItem;
