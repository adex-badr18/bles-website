import { useState } from "react";
import { reviewsColumns, reviews } from "../../reviews/data";
import Modal from "../../../../components/Modal";
import { MdClose } from "react-icons/md";
import ReviewsSearchComponent from "../../reviews/components/ReviewsSearchComponent";
import PaginatedList from "../../components/PaginatedList";

const ReviewsTab = ({ patientId }) => {
    const [reqBody, setReqBody] = useState(
        patientId
            ? {
                  patientId: patientId,
                  nickName: "",
                  email: "",
                  rating: "",
                  status: "",
                  createdAt: "",
              }
            : {}
    );
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const searchHandler = async (formPayload) => {
        setReqBody(formPayload);
    };

    return (
        <section className="py-8 relative">
            <PaginatedList
                columns={reviewsColumns}
                endpoint="/reviews/search"
                pageTitle="Patient's Reviews"
                payload={reqBody}
                queryKey={["reviews"]}
                setIsSearchModalOpen={setIsSearchModalOpen}
                reqBody={reqBody}
                setReqBody={setReqBody}
                patientId={patientId}
            />

            <Modal isOpen={isSearchModalOpen}>
                <div className="w-full bg-white relative p-6 rounded-md shadow-lg">
                    {
                        <ReviewsSearchComponent
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

export default ReviewsTab;
