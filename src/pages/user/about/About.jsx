import SectionHeader from "../../../components/SectionHeader";
import miaImg from "../../../assets/mia.webp";
import logoMark from "../../../assets/logo-mark.png";
import aboutImage from "../../../assets/three-image.png";

import { TbSquareLetterL } from "react-icons/tb";
import {
    MdOutlineCircle,
    MdOutlineStarBorder,
    MdPersonOutline,
    MdOutlineAdd,
    MdOutlineDragHandle,
} from "react-icons/md";

const About = () => {
    return (
        <section className="pt-10 md:pt-20">
            <SectionHeader
                bgTitle="About"
                primaryTitle="Read About BrightLife Enhancement Services (BLES)"
                secondaryTitle="About Us"
                titleAlignment=""
            />

            <div className="flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-16 w-full min-w-0 max-w-[1320px] p-8 md:p-16 mx-auto mt-6 md:mt-10">
                <div className="space-y-5 flex-1">
                    <h2 className="text-darkBlue text-2xl font-semibold">
                        The Story of BrightLife: A Vision from Mia, Founder of{" "}
                        <span className="text-vividRed font-bold">
                            BrightLife Enhancement Services
                        </span>
                    </h2>

                    <p className="text-deepGrey leading-[28px] text-justify">
                        With over 15 years of experience in mental health,
                        including extensive work in inpatient care, Mia
                        witnessed firsthand the revolving door many individuals
                        faced—admitted, discharged, and readmitted without the
                        support they needed to thrive. She knew there had to be
                        a better way.
                    </p>

                    <p className="text-deepGrey leading-[28px] text-justify">
                        Driven by her passion for mental wellness and community
                        care, Mia founded BrightLife Enhancement Services with a
                        clear mission: to break the cycle and empower
                        individuals to lead functional, fulfilling lives within
                        their communities. She believed that true healing
                        happens beyond hospital walls—within supportive
                        environments where people are guided, heard, and valued.
                    </p>

                    <p className="text-deepGrey leading-[28px] text-justify">
                        Mia built a dedicated team of compassionate, experienced
                        professionals who share her vision of fostering
                        independence through community integration. BrightLife’s
                        programs are designed to help individuals recognize
                        their strengths, set personalized goals, and work
                        towards achieving them—whether through life skills, peer
                        support, or holistic wellness practices.
                    </p>

                    <p className="text-deepGrey leading-[28px] text-justify">
                        Under Mia’s leadership, BrightLife has become more than
                        a service provider—it is a place of hope, connection,
                        and growth. Her commitment to person-centered care and
                        community inclusion continues to drive the mission
                        forward: Empowering individuals, embracing strengths,
                        and guiding lives toward brighter futures.
                    </p>
                </div>

                <div className="flex-1 md:self-start">
                    <img
                        src={miaImg}
                        alt=""
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>

            <div className="bg-lightBlue">
                <div className=" p-8 md:p-16 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 w-full min-w-0 max-w-[1320px] mx-auto">
                    <div className="flex-[3]">
                        <img src={logoMark} alt="" className="object-cover" />
                    </div>

                    <div className="space-y-5 flex-[5]">
                        <h2 className="text-darkBlue text-2xl font-semibold">
                            BrightLife Logo Story: A Symbol of Hope, Unity, and
                            Care
                        </h2>

                        <p className="text-deepGrey leading-[28px] text-justify">
                            Our logo is more than a design—it’s a reflection of
                            who we are and what we stand for. Each element
                            carries a deeper meaning, blending together to
                            represent our mission of holistic care, connection,
                            and healing.
                        </p>

                        <p className="text-deepGrey leading-[28px] text-justify">
                            <span className="font-semibold">
                                The Letter "L":
                            </span>{" "}
                            The abstract figure creatively forms the letter "L,"
                            tying the logo to BrightLife's name. It symbolizes
                            the foundation of our care—Life, Light, and Love.
                        </p>

                        <p className="text-deepGrey leading-[28px] text-justify">
                            <span className="font-semibold">
                                The Star (Hope & Guidance):
                            </span>{" "}
                            At the heart of our design, the star shines bright,
                            representing hope, direction, and the transformative
                            power of mental wellness. It reflects the "Bright"
                            in BrightLife—illuminating the path to healing.
                        </p>

                        <p className="text-deepGrey leading-[28px] text-justify">
                            <span className="font-semibold">
                                The Abstract Human Figures (Community &
                                Support):
                            </span>
                            Interconnected figures symbolize people united in
                            care and compassion. They reflect our belief in the
                            power of togetherness, shared experiences, and
                            person-centered support.
                        </p>

                        <p className="text-deepGrey leading-[28px] text-justify">
                            <span className="font-semibold">
                                The Circle (Wholeness & Unity):
                            </span>{" "}
                            Surrounding everything is a perfect circle,
                            symbolizing wholeness, inclusiveness, and unity. It
                            represents BrightLife’s holistic approach—caring for
                            the mind, body, and spirit together.
                        </p>

                        <p className="text-deepGrey leading-[28px] text-justify">
                            When combined, these elements create more than a
                            logo—they form a symbol of connection, healing, and
                            brighter tomorrows.
                        </p>

                        <p className="text-deepGrey leading-[28px] text-justify">
                            When combined, these elements create more than a
                            logo—they form a symbol of connection, healing, and
                            brighter tomorrows.
                            <span className="block">
                                Together, they embody BrightLife’s values:
                                Interconnectedness, Compassion, and Holistic
                                Wellness. BrightLife: Lighting the path to
                                healing, together.
                            </span>
                        </p>

                        <div className="flex items-center gap-8 text-lightGreen text-4xl py-5">
                            <TbSquareLetterL />
                            <MdOutlineAdd />
                            <MdOutlineStarBorder />
                            <MdOutlineAdd />
                            <MdOutlineCircle />
                            <MdOutlineAdd />
                            <MdPersonOutline />
                            <MdOutlineDragHandle />
                            <img
                                src={logoMark}
                                alt=""
                                className="object-cover w-7 sm:w-10"
                            />
                        </div>

                        <p className="text-lightGreen text-lg md:text-xl">
                            <span className="font-bold">BrightLife:</span>{" "}
                            Lighting the path to healing, together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
