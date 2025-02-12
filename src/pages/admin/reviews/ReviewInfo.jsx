import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import LinkButton from "../../../components/LinkButton";
import SubmitButton from "../../../components/SubmitButton";
import { reviews } from "./data";
import { MdOutlineHome } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

export const reviewLoader = async ({ params }) => {
    const id = params.id;

    const reviewInfo = reviews.filter((review) => review.id === id);

    return reviewInfo.length > 0
        ? reviewInfo[0]
        : {
              status: "error",
              message:
                  "The review information you requested could not be found.",
          };
};

const ReviewInfo = () => {
    const [reviewInfo, setReviewInfo] = useState(useLoaderData() || {});
    const [isPublishing, setIsPublishing] = useState(false);
    const [buttonText, setButtonText] = useState("Publish");
    // const reviewInfo = useLoaderData();

    const handlePublish = () => {
        setIsPublishing(true);

        setTimeout(() => {
            if (buttonText === "Publish") {
                setButtonText("Unpublish");
            } else {
                setButtonText("Publish");
            }

            setIsPublishing(false);
        }, 4000);
    };

    if (reviewInfo.status === "error") {
        return (
            <section className="py-8 md:py-20">
                <div className="flex flex-col items-center justify-center gap-4 font-poppins">
                    <h1 className="capitalize text-vividRed text-3xl font-bold">
                        {reviewInfo.status}!
                    </h1>
                    <p className="text-grey text-lg font-medium">
                        {reviewInfo.message}
                    </p>
                    <LinkButton
                        name="Home"
                        to="/"
                        bgColor="green"
                        icon={<MdOutlineHome className="text-xl" />}
                    />
                </div>
            </section>
        );
    }

    return (
        <section className="">
            <PageTitle title={`Review by ${reviewInfo.name}`}>
                <SubmitButton
                    isSubmitting={isPublishing}
                    loadingText={
                        reviewInfo.status === "active"
                            ? "Unpublishing..."
                            : "Publishing..."
                    }
                    submitText={buttonText}
                    onSubmit={handlePublish}
                    xtraClass=""
                />
            </PageTitle>

            <div className="space-y-6 md:space-y-10 bg-gray-200 p-10 rounded-lg">
                <div className="space-y-4 md:space-y-8">
                    <div className="flex flex-col items-center gap-1 text-deepGrey">
                        <h3 className="text-darkBlue text-xl md:text-3xl font-bold">
                            {reviewInfo.name}
                        </h3>
                        <span className="md:text-lg block">
                            {reviewInfo.email}
                        </span>
                        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <span
                                        key={index}
                                        className={`text-lg ${
                                            index + 1 <=
                                            Number(reviewInfo.rating)
                                                ? "text-yellow-600"
                                                : "text-lightGrey"
                                        }`}
                                    >
                                        <FaStar />
                                    </span>
                                ))}
                            </div>

                            <span className="">{`04/23/2024`}</span>
                        </div>
                    </div>

                    <p className="text-deepGrey md:text-lg w-full max-w-md mx-auto text-center">
                        {reviewInfo.review}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReviewInfo;
