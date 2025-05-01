import React from "react";
import FieldItem from "../../../../../components/FieldItem";

const DynamicObjField = ({ data, title, emptyListDescr }) => {
    // console.log(data);
    return (
        <div className="space-y-4">
            <h4 className="text-lg text-darkBlue font-medium capitalize">
                {title}
            </h4>
            <div className="space-y-4 md:space-y-6">
                {data.length < 1 ? (
                    <div className="">{emptyListDescr}</div>
                ) : (
                    data.map((group, index) => {
                        const formattedGroup = group.filter((item) => !!item);
                        return (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 border rounded p-4"
                            >
                                {formattedGroup.map((field, i) => (
                                    <FieldItem
                                        key={i}
                                        label={field.key}
                                        value={field.value}
                                    />
                                ))}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default DynamicObjField;
