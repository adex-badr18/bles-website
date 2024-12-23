import { useState, useEffect } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollLevel = document.documentElement.scrollTop;
        setIsVisible(scrollLevel > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed flex items-center justify-center bottom-8 right-8 h-12 w-12 rounded-full bg-vividRed hover:bg-lightGreen text-lg text-white cursor-pointer ${
                isVisible ? "block" : "hidden"
            } z-50 shadow-xl`}
            onClick={scrollToTop}
        >
            <FaLongArrowAltUp />
        </div>
    );
};

export default ScrollToTop;
