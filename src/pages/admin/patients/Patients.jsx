import { useState } from "react";
import PageTitle from "../components/PageTitle";
import Table from "../components/Table";
import Modal from "../../../components/Modal";
import SearchComponent from "./components/SearchComponent";
import { MdClose } from "react-icons/md";
import { patients, patientsColumns, patientsList } from "./data";
import GlobalPagination from "../components/GlobalPagination";

import { usePatients, useSearchPatient } from "../../../hooks/usePatients";
import { useToast } from "../../../components/ToastContext";
import Spinner from "../../../components/Spinner";
import Error from "../../../components/Error";

const Patients = () => {
    const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useState({});
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const { data, isLoading, isFetching, isError, error } = usePatients(
        page,
        searchParams
    );
    const { showToast } = useToast();

    // const [isSubmitting, setIsSubmitting] = useState(false);
    // const [isPaginationLoading, setIsPaginationLoading] = useState(false);
    // const [paginationData, setPaginationData] = useState({
    //     pageRange: "1-50",
    //     totalData: "3,000",
    //     canNext: false,
    //     canPrevious: false,
    // });
    // const [searchFormData, setSearchFormData] = useState({
    //     data: {
    //         id: "",
    //         firstName: "",
    //         lastName: "",
    //         middleName: "",
    //         dob: "",
    //         phone: "",
    //         email: "",
    //         gender: "",
    //         maritalStatus: "",
    //         city: "",
    //         state: "",
    //         paymentMode: "",
    //     },
    // });

    // const searchHandler = async (e) => {
    //     e.preventDefault();

    //     setIsSubmitting(true);

    //     setTimeout(() => {
    //         setIsSubmitting(false);
    //         setIsSearchModalOpen(false);
    //     }, 4000);

    //     console.log("Submitted", searchFormData);
    // };

    const onNextPage = async () => {
        const hasMore = data?.currentPage < data?.totalPages;
        setPage((prev) => (hasMore ? prev + 1 : prev));
    };

    const onPreviousPage = async () => {
        setPage((prev) => Math.max(prev - 1, 1));
    };

    if (isError) {
        console.error(error);

        showToast({
            message:
                error.message || "Error loading patients. Please try again.",
            type: "error",
            duration: 5000,
        });

        // return (
        //     <Error
        //         message={
        //             error.message || "Error loading patients. Please try again"
        //         }
        //     />
        // );
    }

    if (isLoading) {
        return (
            <Spinner
                secondaryText="Loading patients..."
                spinnerSize="w-10 h-10"
                textClass="text-lg text-darkBlue font-semibold"
            />
        );
    }

    return (
        <section className="py-8 relative">
            {isFetching && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 rounded shadow-lg px-3 py-1 bg-borderColor text-offWhite">
                    Loading...
                </div>
            )}

            <PageTitle title="Registered Patients">
                <GlobalPagination
                    metaData={{
                        currentPage: data?.currentPage,
                        totalPages: data?.totalPages,
                    }}
                    onNext={onNextPage}
                    onPrevious={onPreviousPage}
                />
            </PageTitle>

            <Table
                data={patientsList}
                columns={patientsColumns}
                entity="patients"
                isIncludePagination={true}
                isIncludeSearchBox={true}
                tableTitle="Patients"
                columnFilters={[]}
                setIsSearchModalOpen={setIsSearchModalOpen}
            />

            <Modal isOpen={isSearchModalOpen}>
                <div className="w-full max-w-xl h-[90vh] overflow-y-auto bg-white relative p-6 rounded-md shadow-lg">
                    {
                        <SearchComponent
                            setIsSearchModalOpen={setIsSearchModalOpen}
                            onSearch={setSearchParams}
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
