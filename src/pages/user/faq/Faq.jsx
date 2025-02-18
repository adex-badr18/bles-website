import SectionHeader from "../../../components/SectionHeader";
import Accordion from "../../../components/Accordion";
import { faqData1, faqData2 } from "./data";

const Faq = () => {
    return (
        <section className="pt-8 md:pt-20">
            <div className="wrapper">
                <SectionHeader
                    bgTitle="Faqs"
                    primaryTitle="Most Answered Questions"
                    secondaryTitle="Get Answers"
                />
            </div>

            <div className="bg-lightBlue">
                <div className="wrapper py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 md:gap-10 gap-y-10">
                        <Accordion data={faqData1} isGridLayout={false} />
                        <Accordion data={faqData2} isGridLayout={false} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
