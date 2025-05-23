import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail, MdOutlineScheduleSend } from "react-icons/md";

import SectionHeader from "../../../components/SectionHeader";
import ContactCard from "./components/ContactCard";
import LinkButton from "../../../components/LinkButton";

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
                        title={`Phone/Fax`}
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
                        value1={``}
                        value2={`info@blesomhc.com`}
                    />
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.2027228604643!2d-77.72012792494687!3d39.64515197157402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaf672f9fd1cf54cd%3A0x4658bb5c4df1f497!2sBrightLife%20Enhancement%20Services%20LLC!5e0!3m2!1sen!2sng!4v1742393927157!5m2!1sen!2sng"
                    // width="800"
                    // height="600"
                    className="w-full h-96 border-8 border-lightGreen rounded-lg"
                    // style={{border: "none"}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* <div className="">
                    <img src="" alt="" className="" />
                </div> */}

                {/* Appointment Schedule Call to Action */}
                <div className="bg-lightBlue text-darkBlue py-5 md:py-10 px-8 md:px-16 rounded-xl shadow-xl">
                    <h3 className="text-xl md:text-2xl font-medium text-center mb-2">
                        Schedule your appointment with{" "}
                        <span className="text-originalGreen font-bold">
                            BrightLife Enhacement Services
                        </span>{" "}
                        today.
                    </h3>
                    <p className="md:text-lg font-medium text-center">
                        <em className="">
                            "Every day is a new opportunity for change.
                            Together, we can build a{" "}
                            <span className="text-originalGreen">brighter</span>{" "}
                            future filled with hope and resilience."
                        </em>
                    </p>

                    <div className="w-full max-w-xs mx-auto mt-6">
                        <LinkButton
                            name="Schedule Now"
                            to="https://mentalhealthchart.com/book-appointment/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlckhlYWx0aGllSWQiOiI4Nzk4NjYiLCJsb2NhdGlvbkhlYWx0aGllSWQiOiI2MzYyOSIsInByYWN0aWNlTmFtZSI6IkJyaWdodExpZmUgRW5oYW5jZW1lbnQgU2VydmljZXMiLCJwcmFjdGljZUlkIjoxMDIyMywicHJvdmlkZXJGdWxsTmFtZSI6Ik1pYSBBbCIsInRlbmFudElkIjoiMTY5NDY4NDUtNzYwNy00MGU0LTkxOTItMjBkYzU3N2I0NTgwIiwicHJlc2NyZWVuaW5nRm9ybSI6dHJ1ZSwiY3VzdG9tRm9ybUlkIjoiNDhjNmEzYzgtMjJlYi00ZjRmLWIwN2UtMTRmNmE4MjFlNTE1IiwicmVhc29uRm9yVmlzaXQiOnRydWUsIm1haW5QcmFjdGljZUlkIjoxMDIyMywic21zRW5hYmxlZCI6dHJ1ZSwic21zUmVtaW5kZXJzRW5hYmxlZCI6ZmFsc2UsImlhdCI6MTc0NTI2ODgwNn0.g3TWHfRuZ03RPvRq25WuE34Wot-h6hJoDuoj3hP8JFs"
                            target="_blank"
                            icon={<MdOutlineScheduleSend />}
                            classAttrs=""
                            bgColor="green"
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
