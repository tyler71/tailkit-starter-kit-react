import {useLoaderData} from "react-router-dom";
import useItemStore from "../../stores/ItemStore";


async function itemLoader({ params }: any) {
    const item = params.itemId
    return { item }
}

function ItemPage() {
    const { getItem } = useItemStore()
    const {itemId} = useLoaderData();
    const item = getItem(itemId)
    console.log(item)

    return (
        <div>
            <p>
                Ok here we {item?.name} goooo
            </p>
            Item page
        </div>
    )
}

export default ItemPage
export { itemLoader }