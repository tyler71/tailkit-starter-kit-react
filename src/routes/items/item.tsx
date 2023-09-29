import {useLoaderData} from "react-router-dom";
import useItemStore from "../../stores/ItemStore";


async function itemLoader({ params }: any) {
    const itemId = params.itemId
    return { itemId }
}

function ItemPage() {
    const { getItem } = useItemStore()
    // @ts-ignore
    const {itemId}: number = useLoaderData();
    const item = getItem(itemId)
    console.log(item)

    return (
        <>
            {/* CTA Section: Simple Box Dark With Shapes */}
            <div className="bg-white dark:bg-gray-900">
                <div className="container xl:max-w-6xl mx-auto px-4 py-16 lg:px-8 lg:py-32 relative">
                    <div className="absolute inset-0 -mx-2 my-6 lg:my-20 bg-gray-800 -skew-y-1 rotate-2 rounded" />
                    <div className="absolute top-3 lg:top-14 left-6 lg:left-6 bg-primary-400 w-12 h-12 -skew-y-3 rotate-45 rounded-full" />
                    <div className="absolute top-2 lg:top-12 -left-6 bg-primary-600 w-16 h-16 -skew-y-3 rotate-45 rounded-3xl" />
                    <div className="flex items-center flex-col md:flex-row relative space-y-8 md:space-y-0">
                        {/* Heading */}
                        <div className="md:w-7/12 py-5 md:p-5 text-center md:text-left">
                            <h2 className="text-4xl text-white font-black mb-4">
                                What Item?
                            </h2>
                            <h3 className="text-xl leading-relaxed text-gray-300">
                                Item {itemId}
                            </h3>
                        </div>
                        {/* END Heading */}

                        {/* Actions */}
                        <div className="grow md:p-5 md:text-center">
                        </div>
                        {/* END Actions */}
                    </div>
                </div>
            </div>
            {/* END CTA Section: Simple Box Dark With Shapes */}
        </>
    )
}

export default ItemPage
export { itemLoader }