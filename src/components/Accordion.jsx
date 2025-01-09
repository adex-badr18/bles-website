import { useState } from "react";
import { AccordionArrow } from "./icons";
import { CgChevronDoubleRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const Accordion = ({ data, isGridLayout }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordionItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div
            className={`${
                isGridLayout
                    ? "grid grid-cols-1 md:grid-cols-2 gap-5"
                    : "flex flex-col gap-5"
            }`}
        >
            {data.map((datum) => (
                <div className="w-full border">
                    <h2 className="font-medium text-darkBlue text-lg border-b">
                        <button
                            onClick={() => toggleAccordionItem(datum.id)}
                            className="px-7 py-4 text-left flex items-center justify-between gap-5 w-full"
                        >
                            <span className="">{datum.title}</span>
                            <AccordionArrow
                                className={`h-5 w-5 transform transition-transform duration-300 ${
                                    activeIndex === datum.id
                                        ? "rotate-180"
                                        : "rotate-0"
                                }`}
                            />
                        </button>
                    </h2>

                    {activeIndex === datum.id && (
                        <div className="p-7 space-y-2">
                            <p className="text-grey text-base">{datum.description}</p>
                            {datum.link && (
                                <Link
                                    to={datum.link}
                                    className="flex items-center gap-1 text-vividRed font-poppins font-semibold text-base"
                                >
                                    <span className="">Fill form</span>
                                    <CgChevronDoubleRight className="text-lg" />
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
