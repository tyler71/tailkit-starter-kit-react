import {createBrowserRouter} from "react-router-dom";
import RootPage from "./routes/root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
    },
]);

export default router