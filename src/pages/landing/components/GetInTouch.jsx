import LinkButton from "../../../components/LinkButton";
import { MdOutlineContactPage, MdOutlineGroups3 } from "react-icons/md";

const GetInTouch = () => {
    return (
        <section className="px-5 md:px-10 py-24 bg-get-in-touch-bg bg-cover bg-no-repeat bg-center">
            <div className="container">
                <div className="text-white space-y-5 w-full md:w-7/12">
                    <h2 className="font-poppins">
                        <span className="font-semibold text-xl leading-[30px]">
                            Get In Touch
                        </span>
                        <span className="block mt-5 text-3xl md:text-5xl leading-[40px] md:leading-[58px] font-bold">
                            Best Behavioral & Health Care Near Your City
                        </span>
                    </h2>

                    <p className="font-rubik text-lg leading-[28px]">
                        We've 25 years of experience in Behavioral Health
                        services.
                    </p>
                </div>

                <div className="flex flex-wrap gap-5 mt-8 md:mt-12">
                    <LinkButton
                        name="Contact Us"
                        icon={<MdOutlineContactPage className="" />}
                        bgColor="red"
                        to="/contact"
                        classAttrs=""
                    />
                    <LinkButton
                        name="Specialists"
                        icon={<MdOutlineGroups3 className="" />}
                        bgColor=""
                        to="/specialists"
                        classAttrs=""
                    />
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
