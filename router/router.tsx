import {createBrowserRouter} from "react-router-dom";
import RootPage from "../src/routes/root/root";
import ItemPage, {itemLoader} from "../src/routes/items/item";
import RootLayout from "../src/RootLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout><RootPage/></RootLayout>,
    },
    {
        path: 'items/:itemId',
        element: <ItemPage/>,
        loader: itemLoader,
    }
]);

export default router