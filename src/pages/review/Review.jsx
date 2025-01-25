import { useState, useEffect } from "react";
import SectionHeader from "../../components/SectionHeader";
import StarsRating from "./components/StarsRating";

const Review = () => {
    const [rating, setRating] = useState(0);
    const [reviewData, setReviewData] = useState({
        nickname: "",
        email: "",
        referralWish: "",
        rating: 0,
        reviewMessage: "",
    });

    useEffect(() => {
        setReviewData((prev) => ({ ...prev, rating: rating }));
    }, [rating]);

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        const elementValue = type === "checkbox" ? checked : value;

        setReviewData((prev) => ({ ...prev, [name]: elementValue }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(reviewData);
    };

    return (
        <section className="pt-8 md:pt-20">
            <div className="wrapper">
                <SectionHeader
                    bgTitle="Review"
                    primaryTitle="We Value your Feedback"
                    secondaryTitle="Rate Your Experience"
                />
            </div>

            <div className="bg-lightGray">
                <div className="wrapper py-8">
                    <div className="w-full max-w-xl mx-auto border rounded-lg">
                        <form className="bg-white p-6 rounded-lg space-y-5">
                            <div className="space-y-1">
                                <label
                                    htmlFor="nickname"
                                    className="text-deepGrey font-medium"
                                >
                                    Nickname
                                </label>
                                <input
                                    type="text"
                                    name="nickname"
                                    id="nickname"
                                    className="input"
                                    placeholder="Your nickname"
                                    value={reviewData.nickname}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-deepGrey font-medium"
                                >
                                    Email (will not be published)
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="input"
                                    placeholder="youremail@domain.com"
                                    value={reviewData.email}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div className="space-y-1">
                                <p className="text-deepGrey font-medium">
                                    Would you recommend us to your
                                    family/friends?
                                </p>
                                <div className="flex items-center gap-8">
                                    <label
                                        htmlFor="referralWishYes"
                                        className="text-deepGrey font-medium flex items-center gap-2 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="referralWish"
                                            id="referralWishYes"
                                            className="hidden peer"
                                            value="Yes"
                                            checked={
                                                reviewData.referralWish ===
                                                "Yes"
                                            }
                                            onChange={handleFormChange}
                                        />
                                        <div className="w-5 h-5 rounded-full border-2 border-gray-500 peer-checked:bg-darkBlue flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full bg-transparent"></div>
                                        </div>
                                        <span className="">Yes</span>
                                    </label>

                                    <label
                                        htmlFor="referralWishNo"
                                        className="text-deepGrey font-medium flex items-center gap-2 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="referralWish"
                                            id="referralWishNo"
                                            className="hidden peer"
                                            value="No"
                                            checked={
                                                reviewData.referralWish === "No"
                                            }
                                            onChange={handleFormChange}
                                        />
                                        <div className="w-5 h-5 rounded-full border-2 border-gray-500 peer-checked:bg-darkBlue flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full bg-transparent"></div>
                                        </div>
                                        <span className="">No</span>
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <p className="text-deepGrey font-medium">
                                    Rate your experience
                                </p>
                                <StarsRating
                                    rating={rating}
                                    setRating={setRating}
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="reviewMessage"
                                    className="text-deepGrey font-medium"
                                >
                                    Review Message
                                </label>
                                <textarea
                                    name="reviewMessage"
                                    id="reviewMessage"
                                    className="input"
                                    placeholder="Describe your experience"
                                    value={reviewData.reviewMessage}
                                    onChange={handleFormChange}
                                ></textarea>
                            </div>

                            <p className="text-xs font-poppins text-darkBlue">
                                You will be able to receive emails in connection
                                with this review. All emails contain the option
                                to unsubscribe. We can use the text and star
                                rating from your review for marketing purposes.
                            </p>

                            <button
                                onClick={onSubmit}
                                className="bg-darkBlue text-white hover:bg-deepBlue hover:font-medium transition duration-300 p-2 text-center w-full rounded"
                            >
                                Submit review
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
