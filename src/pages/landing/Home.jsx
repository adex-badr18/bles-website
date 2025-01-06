import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import GetInTouch from "./components/GetInTouch";
import Blog from "./components/Blog";
import StatsAppointment from "./components/StatsAppointment";
import Experts from "./components/Experts";
import AcceptedInsurance from "./components/AcceptedInsurance";

const Home = () => {
    return (
        <section className="">
            <Hero />
            <About />
            <AcceptedInsurance />
            <Services />
            <Programs />
            <Experts />
            <StatsAppointment />
            <Testimonials />
            <GetInTouch />
            {/* <Blog /> */}
        </section>
    );
};

export default Home;
