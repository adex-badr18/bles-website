import { useState } from "react";
import Table from "../components/Table";
import PageTitle from "../components/PageTitle";
import { reviews, reviewsColumns } from "./data";
import Modal from "../../../components/Modal";
import { MdClose } from "react-icons/md";
import GlobalPagination from "../components/GlobalPagination";
import SearchComponent from "./components/ReviewsSearchComponent";
import PaginatedList from "../components/PaginatedList";
import { objectToFormData } from "../../utils";

const Reviews = () => {
    const [reqBody, setReqBody] = useState({});
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const searchHandler = async (formPayload) => {
        setReqBody(formPayload);
    };

    return (
        <section className="py-8 relative">
            <PaginatedList
                columns={reviewsColumns}
                endpoint="/reviews/search"
                pageTitle="Submitted Reviews"
                payload={reqBody}
                queryKey={["reviews"]}
                setIsSearchModalOpen={setIsSearchModalOpen}
                reqBody={reqBody}
                setReqBody={setReqBody}
            />

            <Modal isOpen={isSearchModalOpen}>
                <div className="w-full max-w-xl overflow-y-auto bg-white relative p-6 rounded-md shadow-lg">
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

export default Reviews;
