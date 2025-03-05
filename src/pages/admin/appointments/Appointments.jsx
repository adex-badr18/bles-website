import { useState } from "react";
import Table from "../components/Table";
import PageTitle from "../components/PageTitle";
import Modal from "../../../components/Modal";
import { MdClose } from "react-icons/md";
import GlobalPagination from "../components/GlobalPagination";
import SearchComponent from "./components/SearchComponent";
import { appointments, appointmentsColumns } from "./data";

const Appointments = () => {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isPaginationLoading, setIsPaginationLoading] = useState(false);
    const [paginationData, setPaginationData] = useState({
        pageRange: "1-50",
        totalData: "3,000",
        canNext: false,
        canPrevious: false,
    });
    const [searchFormData, setSearchFormData] = useState({
        data: {
            id: "",
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
        },
    });

    const onSearchFormChange = (e) => {
        setSearchFormData((prev) => {
            const keys = fieldPath.split(".");

            const updateNestedField = (obj, keys, value) => {
                if (keys.length === 1) {
                    return {
                        ...obj,
                        [keys[0]]: value,
                    };
                }

                return {
                    ...obj,
                    [keys[0]]: updateNestedField(
                        obj[keys[0]],
                        keys.slice(1),
                        value
                    ),
                };
            };

            return {
                ...prev,
                [section]: updateNestedField(prev[section], keys, value),
            };
        });
    };

    const searchHandler = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSearchModalOpen(false);
        }, 4000);

        console.log("Submitted", searchFormData);
    };

    const onNextPage = async () => {
        setIsPaginationLoading(true);

        setTimeout(() => {
            setIsPaginationLoading(false);
        }, 4000);
    };

    const onPreviousPage = async () => {
        setIsPaginationLoading(true);

        setTimeout(() => {
            setIsPaginationLoading(false);
        }, 4000);
    };

    return (
        <section className="py-8 relative">
            {isPaginationLoading && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 rounded shadow-lg px-3 py-1 bg-borderColor text-offWhite">
                    Loading...
                </div>
            )}

            <PageTitle title="Scheduled Appointments">
                <GlobalPagination
                    pageRange={paginationData.pageRange}
                    totalData={paginationData.totalData}
                    onNext={onNextPage}
                    onPrevious={onPreviousPage}
                />
            </PageTitle>

            <Table
                data={appointments}
                columns={appointmentsColumns}
                entity="appointments"
                isIncludePagination={true}
                isIncludeSearchBox={true}
                tableTitle="Appointments"
                columnFilters={[]}
                setIsSearchModalOpen={setIsSearchModalOpen}
            />

            <Modal isOpen={isSearchModalOpen}>
                <div className="w-full max-w-xl h-[90vh] overflow-y-auto bg-white relative p-6 rounded-md shadow-lg">
                    {
                        <SearchComponent
                            searchFormData={searchFormData}
                            onChange={onSearchFormChange}
                            onSearch={searchHandler}
                            isSubmitting={isSubmitting}
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
