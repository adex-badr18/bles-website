import { useState } from "react";
import { FaStar } from "react-icons/fa6";

const StarsRating = ({rating, setRating}) => {
    
    const [hover, setHover] = useState(0);
    return (
        <div className="flex items-center gap-8">
            {Array.from({ length: 5 }, (_, index) => {
                const starIndex = index + 1;

                return (
                    <button
                        key={starIndex}
                        onClick={() => setRating(starIndex)}
                        onMouseEnter={() => setHover(starIndex)}
                        onMouseLeave={() => setHover(0)}
                        className={`p-1 border rounded text-2xl focus:outline-none ${starIndex <= (hover || rating) ? "border-yellow-500" : ""}`}
                        type="button"
                    >
                        <FaStar className={`${
                            starIndex <=
                            (hover || rating) ? "text-yellow-500" : "text-gray-400"
                        }`} />
                    </button>
                );
            })}
        </div>
    );
};

export default StarsRating;
