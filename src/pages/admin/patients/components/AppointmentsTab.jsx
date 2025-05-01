import { appointmentsColumns } from "../data";
import { useState } from "react";
import Modal from "../../../../components/Modal";
import { MdClose } from "react-icons/md";
import AppointmentsSearchComponent from "../../appointments/components/AppointmentsSearchComponent";
import PaginatedList from "../../components/PaginatedList";

const AppointmentsTab = ({ patientId }) => {
    const [reqBody, setReqBody] = useState(
        patientId
            ? {
                  patientId: patientId,
                  firstName: "",
                  lastName: "",
                  middleName: "",
                  dob: "",
                  phone: "",
                  email: "",
                  gender: "",
                  maritalStatus: "",
                  city: "",
                  state: "",
                  appointmentDateTime: "",
                  paymentMode: "",
              }
            : {}
    );
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const searchHandler = async (formPayload) => {
        setReqBody(formPayload);
    };

    // console.log("AppointmentsTab", reqBody)

    return (
        <section className="py-8 relative">
            <PaginatedList
                columns={appointmentsColumns}
                endpoint="/appointments/search"
                pageTitle="Patient's Appointments"
                payload={reqBody}
                queryKey={["appointments"]}
                setIsSearchModalOpen={setIsSearchModalOpen}
                reqBody={reqBody}
                setReqBody={setReqBody}
                patientId={patientId}
            />

            <Modal isOpen={isSearchModalOpen}>
                <div className="w-full bg-white relative p-6 rounded-md shadow-lg">
                    {
                        <AppointmentsSearchComponent
                            setIsSearchModalOpen={setIsSearchModalOpen}
                            onSearch={searchHandler}
                            searchData={reqBody}
                            patientId={patientId}
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

export default AppointmentsTab;
