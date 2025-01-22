import { useEffect, useState } from "react";

const FileUpload = ({
    value,
    name,
    placeholder,
    label,
    handleFormChange,
    section,
    field,
    isRequired,
}) => {
    const [selectedFile, setSelectedFile] = useState("");

    useEffect(() => {
        handleFormChange(section, field, selectedFile);
    }, [selectedFile]);

    const onFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            const file = e.target.files[0];
            reader.onloadend = () => {
                setSelectedFile(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="space-y-1">
            <label
                htmlFor={name}
                className="block text-grey"
            >
                {label}{" "}
                {isRequired && <small className="text-red-800">*</small>}
            </label>
            <input
                type="file"
                name={name}
                id={name}
                onChange={onFileChange}
                placeholder={placeholder}
                className="input"
                required
            />
        </div>
    );
};

export default FileUpload;
