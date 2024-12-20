import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/landing/Home";
import Services from "./pages/services/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/services", element: <Services /> },
            { path: "*", element: <div>Error!</div> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
