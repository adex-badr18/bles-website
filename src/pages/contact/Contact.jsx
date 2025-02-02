import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail, MdOutlineScheduleSend } from "react-icons/md";

import SectionHeader from "../../components/SectionHeader";
import ContactCard from "./components/ContactCard";
import LinkButton from "../../components/LinkButton";

const Contact = () => {
    return (
        <section className="py-8 md:py-20">
            <div className="wrapper px-6 2xl:px-0 space-y-8 md:space-y-12">
                <SectionHeader
                    bgTitle="Contact"
                    primaryTitle="Feel Free To Contact Us"
                    secondaryTitle="Get In Touch"
                    titleAlignment="center"
                    bgTitleOnly={false}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    <ContactCard
                        icon={<BiPhoneCall />}
                        title={`Phone`}
                        value1={`(410) 988-2626`}
                        value2={`(410) 988-2655`}
                    />
                    <ContactCard
                        icon={<SlLocationPin />}
                        title={`Address`}
                        value1={`226 N Potomac Street,`}
                        value2={`Hagerstown MD 21740.`}
                    />
                    <ContactCard
                        icon={<MdOutlineEmail />}
                        title={`Email`}
                        value1={`brightlife0602@gmail.com`}
                        value2={`info@blesomhc.com`}
                    />
                </div>

                {/* Appointment Schedule Call to Action */}
                <div className="bg-lightBlue text-darkBlue py-5 md:py-10 px-8 md:px-16 rounded-xl shadow-xl">
                    <h3 className="text-xl md:text-2xl font-medium text-center mb-2">
                        Schedule your appointment with{" "}
                        <span className="text-vividRed font-bold">
                            BrightLife Enhacement Services
                        </span>{" "}
                        today.
                    </h3>
                    <p className="md:text-lg font-medium text-center">
                        <em className="">
                            "Every day is a new opportunity for change.
                            Together, we can build a{" "}
                            <span className="text-vividRed">brighter</span>{" "}
                            future filled with hope and resilience."
                        </em>
                    </p>

                    <div className="w-full max-w-xs mx-auto mt-6">
                        <LinkButton
                            name="Schedule Now"
                            to="/appointment"
                            icon={<MdOutlineScheduleSend />}
                            classAttrs=""
                            bgColor="red"
                        />
                    </div>
                </div>

                {/* Location Map */}
                <div className="map"></div>
            </div>
        </section>
    );
};

export default Contact;
