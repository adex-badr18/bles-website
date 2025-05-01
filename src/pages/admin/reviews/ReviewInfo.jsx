import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import LinkButton from "../../../components/LinkButton";
import SubmitButton from "../../../components/SubmitButton";
import { reviews } from "./data";
import Modal from "../../../components/Modal";
import ConfirmStatusUpdateModal from "./components/ConfirmStatusUpdateModal";
import { FaStar } from "react-icons/fa6";
import { useGetReview, useToggleReviewStatus } from "../../../hooks/useReviews";
import { useParams } from "react-router-dom";
import { useToast } from "../../../components/ToastContext";
import Spinner from "../../../components/Spinner";

export const reviewLoader = async ({ params }) => {
    const id = params.id;

    const review = reviews.filter((review) => review.id === id);

    return review.length > 0
        ? review[0]
        : {
              status: "error",
              message:
                  "The review information you requested could not be found.",
          };
};

const review = () => {
    const [buttonText, setButtonText] = useState("");

    const { showToast } = useToast();
    const { id: reviewId } = useParams();
    const {
        data: review,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetReview(reviewId || "");
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const {
        mutate: updateReviewStatus,
        isPending: isUpdating,
        isError: isUpdateStatusError,
        error: updateStatusError,
    } = useToggleReviewStatus({ setIsConfirmModalOpen });

    console.log(review);

    useEffect(() => {
        if (review?.status.toLowerCase() === "published") {
            setButtonText("Unpublish");
        } else {
            setButtonText("Publish");
        }
    }, [review?.status]);

    useEffect(() => {
        if (isError) {
            const errorMessage =
                (typeof error === "string" && error) ||
                error?.message ||
                "An unexpected error occurred. Please try again";

            showToast({
                message: errorMessage,
                type: "error",
                duration: 5000,
            });
        }
    }, [isError]);

    const handleReviewStatusUpdate = async () => {
        const endpoint =
            review.status.toLowerCase() === "published"
                ? `/reviews/unpublish/${review?.id}`
                : `/reviews/publish/${review?.id}`;

        updateReviewStatus({
            id: review.id,
            endpoint,
            payload: review,
        });
    };

    const openConfirmModal = (e) => {
        e.preventDefault();

        setIsConfirmModalOpen(true);
    };

    if (isLoading) {
        return (
            <Spinner
                secondaryText={`Loading review...`}
                spinnerSize="w-10 h-10"
                textClass="text-lg text-darkBlue font-semibold"
                borderClass="border-lightGreen"
            />
        );
    }

    if (isError) {
        return (
            <section className="">
                <p className="text-vividRed text-center">{error.message}</p>
            </section>
        );
    }

    return (
        <section className="">
            <PageTitle title={`Review by ${review?.nickname}`}>
                <SubmitButton
                    isSubmitting={isUpdating}
                    loadingText="Updating..."
                    submitText={buttonText}
                    onSubmit={openConfirmModal}
                    xtraClass=""
                />
            </PageTitle>

            {isUpdateStatusError && (
                <p className="text-vividRed text-center mb-3">
                    {updateStatusError.message}
                </p>
            )}

            <div className="flex-1 space-y-6 md:space-y-10 bg-gray-200 p-10 rounded-lg">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 md:divide-x-2 divide-deepGrey">
                    <div className="flex flex-col gap-1 text-deepGrey">
                        <h3 className="text-darkBlue text-xl md:text-3xl font-bold">
                            {review?.nickname}
                        </h3>
                        <span className=" block">{review?.email}</span>
                        <span className="">{`04/23/2024`}</span>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-8">
                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <span
                                        key={index}
                                        className={`text-lg ${
                                            index + 1 <= Number(review?.rating)
                                                ? "text-yellow-600"
                                                : "text-lightGrey"
                                        }`}
                                    >
                                        <FaStar />
                                    </span>
                                ))}
                            </div>

                            <div className="space-x-2 ">
                                <span
                                    className={`p-1 w-[65px] inline-block text-center rounded text-xs text-offWhite capitalize ${
                                        review?.status.toLowerCase() ===
                                        "published"
                                            ? "bg-lightGreen"
                                            : "bg-vividRed"
                                    }`}
                                >
                                    {review?.status}
                                </span>
                            </div>
                        </div>

                        <div className="space-x-2  mt-3">
                            <span className="">
                                Refer us to family & friends?
                            </span>
                            <span className="font-bold">
                                {review?.referralWish}
                            </span>
                        </div>
                    </div>

                    <div className="md:pl-10 ">
                        <p className="text-deepGrey ">
                            {review?.reviewMessage}
                        </p>
                    </div>
                </div>
            </div>

            {/* Confirm */}
            {isConfirmModalOpen && (
                <ConfirmStatusUpdateModal
                    handleSubmit={handleReviewStatusUpdate}
                    isConfirmModalOpen={isConfirmModalOpen}
                    isSubmitting={isUpdating}
                    setIsConfirmModalOpen={setIsConfirmModalOpen}
                />
            )}
        </section>
    );
};

export default review;
