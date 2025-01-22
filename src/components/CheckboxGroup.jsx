import { MdOutlineCheck } from "react-icons/md";

export const Checkbox = ({
    label,
    value,
    checked,
    onChange,
    checkedClass,
    unCheckedClass,
}) => {
    return (
        <label className="text-darkBlue font-medium flex gap-4 cursor-pointer">
            <input
                type="checkbox"
                value={value}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />

            <div
                className={`w-7 h-7 flex items-center justify-center flex-shrink-0 border rounded transition duration-300 ${
                    checked ? checkedClass : unCheckedClass
                }`}
            >
                {checked && <MdOutlineCheck className="text-vividRed" />}
            </div>
            <span className="">{label}</span>
        </label>
    );
};

const CheckboxGroup = ({
    options,
    formData,
    setFormData,
    name,
    label,
    layout,
    isRequired,
}) => {
    const layoutClass =
        layout === "horizontal"
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-12"
            : "grid-cols-1 gap-5";

    const handleCheckboxChange = (e) => {
        const { value } = e.target;

        // Toggle the selected state of the checkbox
        if (formData[name].includes(value)) {
            setFormData((prev) => ({
                ...prev,
                [name]: formData[name].filter((option) => option !== value),
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: [...formData[name], value],
            }));
        }
    };

    return (
        <div className="space-y-4">
            <label
                htmlFor={name}
                className="text-lg md:text-xl font-bold text-[#FDFDFC]"
            >
                <span>
                    {label}
                    {isRequired && (
                        <small className="ml-1 text-[#DB2F2F] text-base">
                            *
                        </small>
                    )}
                </span>
            </label>
            <div className={`grid ${layoutClass}`}>
                {options.map((option) => (
                    <Checkbox
                        key={option.id}
                        label={option.label}
                        value={option.value}
                        checked={formData[name].includes(option.value)}
                        onChange={handleCheckboxChange}
                        checkedClass="border-orange"
                        unCheckedClass="border-[#C5C7D0]"
                    />
                ))}
            </div>
        </div>
    );
};

export default CheckboxGroup;
