import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/user/landing/Home";
import Services from "./pages/user/services/Services";
import ServiceDetails, {
    serviceLoader,
} from "./pages/user/services/ServiceDetails";
import ProgramDetails, {
    programLoader,
} from "./pages/user/programs/ProgramDetails";
// import About from "./pages/user/landing/components/About";
import About from "./pages/user/about/About";
import Contact from "./pages/user/contact/Contact";
import Appointment from "./pages/user/appointment/Appointment";
import PatientForms from "./pages/user/patientForms/PatientForms";
import Review from "./pages/user/review/Review";
import PatientForm, {
    patientFormLoader,
} from "./pages/user/patientForms/PatientForm";
import Error from "./components/Error";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Patients from "./pages/admin/patients/Patients";
import Patient, { patientLoader } from "./pages/admin/patients/Patient";
import Reviews from "./pages/admin/reviews/Reviews";
import ReviewInfo, { reviewLoader } from "./pages/admin/reviews/ReviewInfo";
import Appointments from "./pages/admin/appointments/Appointments";
import AppointmentInfo, { appointmentLoader } from "./pages/admin/appointments/AppointmentInfo";
import Settings, { settingsLoader } from "./pages/admin/settings/Settings";
import Login from "./pages/admin/auth/Login";
import AdminAuthLayout from "./pages/admin/components/layout/AdminAuthLayout";
import RootLayout from "./components/layout/RootLayout";
import UpdateForm from "./pages/admin/patients/UpdateForm";
import Faq from "./pages/user/faq/Faq";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            // User Routes
            {
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
                        path: "/faq",
                        element: <Faq />,
                    },
                    {
                        path: "/forms/:slug",
                        element: <PatientForm />,
                        loader: patientFormLoader,
                    },
                    {
                        path: "/review",
                        element: <Review />,
                    },
                    { path: "*", element: <div>Coming Soon!</div> },
                ],
            },

            // Admin Routes
            {
                path: "admin",
                element: (
                    <div>
                        <Outlet />
                    </div>
                ),
                children: [
                    { index: true, element: <Login /> },
                    {
                        element: <AdminAuthLayout />,
                        children: [
                            { path: "dashboard", element: <Dashboard /> },
                            { path: "patients", element: <Patients /> },
                            {
                                path: "patients/:id",
                                element: <Patient />,
                                loader: patientLoader
                            },
                            {
                                path: "patients/:id/update",
                                element: <UpdateForm />,
                                loader: patientLoader
                            },
                            { path: "reviews", element: <Reviews /> },
                            {
                                path: "reviews/:id",
                                element: <ReviewInfo />,
                                loader: reviewLoader,
                            },
                            {
                                path: "appointments",
                                element: <Appointments />,
                            },
                            {
                                path: "appointments/:id",
                                element: <AppointmentInfo />,
                                loader: appointmentLoader
                            },
                            { path: "settings", element: <Settings />, loader: settingsLoader },
                            { path: "*", element: <div>Coming Soon!</div> },
                        ],
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
