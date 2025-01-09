import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/landing/Home";
import Services from "./pages/services/Services";
import ServiceDetails, { serviceLoader } from "./pages/services/ServiceDetails";
import ProgramDetails, { programLoader } from "./pages/programs/ProgramDetails";
import About from "./pages/landing/components/About";
import Contact from "./pages/contact/Contact";
import Appointment from "./pages/appointment/Appointment";
import PatientForms from "./pages/patientForms/PatientForms";
import Review from "./pages/review/Review";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/services", element: <Services /> },
            {
                path: "/services/:id",
                element: <ServiceDetails />,
                loader: serviceLoader,
            },
            {
                path: "/programs/:id",
                element: <ProgramDetails />,
                loader: programLoader,
            },
            {
                path: "/about",
                element: <About />,
                loader: programLoader,
            },
            {
                path: "/contact",
                element: <Contact />,
                loader: programLoader,
            },
            {
                path: "/programs/:id",
                element: <ProgramDetails />,
                loader: programLoader,
            },
            {
                path: "/appointment",
                element: <Appointment />,
                // loader: programLoader,
            },
            {
                path: "/forms",
                element: <PatientForms />,
            },
            {
                path: "/review",
                element: <Review />,
            },
            { path: "*", element: <div>Coming Soon!</div> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
