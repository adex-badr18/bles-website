import SectionHeader from "../../../components/SectionHeader";
import Accordion from "../../../components/Accordion";
import { signatureForms, dataCollectionForms } from "./data";

const PatientForms = () => {
    return (
        <section className="pt-8 md:pt-20">
            <div className="wrapper">
                <SectionHeader
                    bgTitle="Forms"
                    primaryTitle="Quick Access to Onboarding"
                    secondaryTitle="Registration Documents"
                />
            </div>

            <div className="bg-lightBlue">
                <div className="wrapper py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 md:gap-10 gap-y-10">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">
                                Data Collection Forms
                            </h3>
                            <Accordion data={dataCollectionForms} />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">
                                Agreement/Consent Forms
                            </h3>
                            <Accordion data={signatureForms} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PatientForms;
