import { MdSearch } from "react-icons/md";

const SearchBox = ({ searchText, onChange, placeholderText, inputName, displayClass }) => {
    return (
        <div className={`relative ${displayClass} w-full max-w-md`}>
            <input
                type="text"
                name={inputName}
                id={inputName}
                value={searchText}
                onChange={onChange}
                placeholder={placeholderText}
                className="w-full text-gray-600 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                <MdSearch className="text-2xl" />
            </span>
        </div>
    );
};

export default SearchBox;