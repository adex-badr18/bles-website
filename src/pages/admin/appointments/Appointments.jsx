import { useState } from "react";
import Table from "../components/Table";
import PageTitle from "../components/PageTitle";
import Modal from "../../../components/Modal";
import { MdClose } from "react-icons/md";
import GlobalPagination from "../components/GlobalPagination";
import AppointmentsSearchComponent from "./components/AppointmentsSearchComponent";
import PaginatedList from "../components/PaginatedList";
import { objectToFormData } from "../../utils";
import { appointments, appointmentsColumns } from "./data";

const Appointments = () => {
    const [reqBody, setReqBody] = useState({});
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const searchHandler = async (formPayload) => {
        setReqBody(formPayload);
    };

    return (
        <section className="py-8 relative">
            <PaginatedList
                columns={appointmentsColumns}
                endpoint="/appointments/search"
                pageTitle="All Appointments"
                payload={reqBody}
                queryKey={["appointments"]}
                setIsSearchModalOpen={setIsSearchModalOpen}
                reqBody={reqBody}
                setReqBody={setReqBody}
            />

            <Modal isOpen={isSearchModalOpen}>
                <div className="w-full max-w-xl h-[90vh] overflow-y-auto bg-white relative p-6 rounded-md shadow-lg">
                    {
                        <AppointmentsSearchComponent
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

export default Appointments;
