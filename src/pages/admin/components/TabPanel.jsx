import React from "react";

const TabPanel = ({tabButtons, tabIndex, setTabIndex}) => {
    return (
        <div className="flex items-center justify-between gap-4 mb-4 md:mb-8">
            <div className="flex items-center gap-6">
                {tabButtons.map((button) => (
                    <button
                        key={button.id}
                        className="flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                        onClick={() => setTabIndex(button.id)}
                        disabled={button.isDisabled}
                    >
                        <span
                            className={`font-lato pb-1 ${
                                tabIndex === button.id
                                    ? "border-b-4 border-lightGreen text-lightGreen font-medium"
                                    : "text-deepGray"
                            }`}
                        >
                            {button.tabName}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TabPanel;
