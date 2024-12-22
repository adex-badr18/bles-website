import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/landing/Home";
import Services from "./pages/services/Services";
import ServiceDetails, { serviceLoader } from "./pages/services/ServiceDetails";
import ProgramDetails, { programLoader } from "./pages/programs/ProgramDetails";

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
            { path: "*", element: <div>Error!</div> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
