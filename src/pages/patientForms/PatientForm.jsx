import { signatureForms, dataCollectionForms } from "./data";
import { useLoaderData } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import LinkButton from "../../components/LinkButton";
import Breadcrumb from "../../components/Breadcrumb";

export const patientFormLoader = ({ params }) => {
    const slug = params.slug;

    const formInfo = [...dataCollectionForms, ...signatureForms].filter(
        (form) => form.slug === slug
    );

    return formInfo.length > 0
        ? formInfo[0]
        : {
              status: "error",
              message: "The patient form you requested could not be found.",
          };
};

const PatientForm = () => {
    const formData = useLoaderData();

    if (formData.status === "error") {
        return (
            <section className="py-8 md:py-20">
                <div className="flex flex-col items-center justify-center gap-4 font-poppins">
                    <h1 className="capitalize text-vividRed text-3xl font-bold">
                        {formData.status}!
                    </h1>
                    <p className="text-grey text-lg font-medium">
                        {formData.message}
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
            <Breadcrumb obj={formData} page="forms" />

            <div className="wrapper py-5 md:py-16">
                <div className="space-y-5">
                    <h1 className="text-center">{formData.title}</h1>
                    {formData.component}
                </div>
            </div>
        </section>
    );
};

export default PatientForm;
