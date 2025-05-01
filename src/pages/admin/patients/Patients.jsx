import { useState } from "react";
import PageTitle from "../components/PageTitle";
import Table from "../components/Table";
import Modal from "../../../components/Modal";
import SearchComponent from "./components/SearchComponent";
import { MdClose } from "react-icons/md";
import { patients, patientsColumns, patientsList } from "./data";

import PaginatedList from "../components/PaginatedList";
import { objectToFormData } from "../../utils";

const Patients = () => {
    const [reqBody, setReqBody] = useState({});
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const searchHandler = async (formPayload) => {
        setReqBody(formPayload);
    };

    return (
        <section className="py-8 relative">
            <PaginatedList
                columns={patientsColumns}
                endpoint="/patients/search"
                pageTitle="Registered Patients"
                payload={reqBody}
                queryKey={["patients"]}
                setIsSearchModalOpen={setIsSearchModalOpen}
                reqBody={reqBody}
                setReqBody={setReqBody}
            />

            <Modal isOpen={isSearchModalOpen}>
                <div className="w-full max-w-xl h-[90vh] overflow-y-auto bg-white relative p-6 rounded-md shadow-lg">
                    {
                        <SearchComponent
                            setIsSearchModalOpen={setIsSearchModalOpen}
                            onSearch={searchHandler}
                            searchData={reqBody}
                        />
                    }
                    <button
                        className="absolute top-2 right-2 text-2xl p-1 hover:bg-gray-300 rounded-md transition-colors duration-300"
                        onClick={() => setIsSearchModalOpen(false)}
                    >
                        <MdClose />
                    </button>
                </div>
            </Modal>
        </section>
    );
};

export default Patients;
