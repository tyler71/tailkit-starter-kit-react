import {createBrowserRouter} from "react-router-dom";
import RootPage from "./routes/root/root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
    },
]);

export default router