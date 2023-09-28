import {createBrowserRouter} from "react-router-dom";
import RootPage from "../src/routes/root/root";
import ItemPage, {itemLoader} from "../src/routes/items/item";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
    },
    {
        path: 'items/:itemId',
        element: <ItemPage />,
        loader: itemLoader,
    }
]);

export default router