import LayoutWebsite from "./components/layouts/LayoutWebsite";
import LayoutAdmin from "./components/layouts/LayoutAdmin";

import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutWebsite />,
    },
    {
        path: "/admin",
        element: <LayoutAdmin />,
    },

]);