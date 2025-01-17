import useItemStore from "../../stores/ItemStore";
import {useState} from "react";
import AppConfig from "../../AppConfig";

function RootPage() {
    const [ itemCount, setItemCount ] = useState(0)
    const { items, createItem } = useItemStore()
    const { ITEM_NAME } = AppConfig()
    return (
        <div className="min-h-screen flex items-center">
            <div className="w-full text-center p-4">
                <div className="py-6">
                    <a className="group relative active:opacity-75 inline-flex items-center mb-3 space-x-2 text-white px-4 py-2" href="/">
                        <div className="absolute inset-0 rounded-lg -m-0.5 bg-gray-200 transform -rotate-3 transition ease-out duration-150 group-hover:rotate-3 group-hover:scale-125" />
                        <div className="absolute inset-0 rounded-lg -m-0.5 bg-gray-800 bg-opacity-95 transform rotate-3 transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-125" />
                        <svg className="inline-block w-6 h-6 relative transform transition ease-out duration-150 group-hover:-rotate-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <circle cx={128} cy={128} r={120} fillOpacity={0} stroke="#13cdc6" strokeLinejoin="round" strokeWidth={16} fill="#293340" />
                            <circle cx={128} cy={128} r={96} fill="#293340" />
                            <path d="M130.424 165.032a20 20 0 01-14.142 24.495l-8.842 2.373a20 20 0 01-24.495-14.142l-2.369-8.842a20 20 0 0114.142-24.5l8.842-2.369a20 20 0 0124.5 14.142z" fill="#818cf8" fillRule="evenodd" />
                            <path d="M191.9 148.561a20 20 0 01-14.143 24.5l-8.842 2.369a20 20 0 01-24.494-14.142l-2.37-8.842a20 20 0 0114.142-24.5l8.842-2.369a20 20 0 0124.5 14.142z" fill="#f472b6" fillRule="evenodd" />
                            <path d="M113.953 103.561a20 20 0 01-14.142 24.5l-8.842 2.369a20 20 0 01-24.495-14.142l-2.369-8.842a20 20 0 0114.142-24.5l8.842-2.369a20 20 0 0124.495 14.142z" fill="#34d399" fillRule="evenodd" />
                            <path d="M175.424 87.09a20 20 0 01-14.142 24.495l-8.842 2.369a20 20 0 01-24.5-14.142l-2.369-8.842a20 20 0 0114.142-24.495l8.842-2.369a20 20 0 0124.5 14.142z" fill="#fbbf24" fillRule="evenodd" />
                        </svg>
                        <span className="text-xl text-white font-semibold tracking-wide relative transform transition ease-out duration-150 group-hover:-rotate-3">
              Tailkit
            </span>
                    </a>
                </div>
                <p className="text-xl text-gray-600 font-bold mb-2">
                    Premium UI components for your Tailwind CSS based projects
                </p>
                <p className="text-gray-600 font-medium mb-10">
                    Crafted with
                    <svg className="align-text-bottom hi-solid hi-heart inline-block w-5 h-5 text-red-500 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
                    by{" "}
                    <a
                        href="https://pixelcave.com"
                        className="transition font-medium text-blue-600 hover:text-blue-400"
                    >
                        pixelcave
                    </a>
                </p>
                <p className="text-sm text-gray-500">
                    You can now use the{" "}
                    <a
                        className="transition font-medium text-blue-600 hover:text-blue-400"
                        href="https://tailkit.com/dashboard"
                    >
                        Tailkit app
                    </a>{" "}
                    to start copying over your layout and components!
                </p>
                <button type="button" className="mt-2 inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-primary-700 bg-primary-700 text-white hover:text-white hover:bg-primary-600 hover:border-primary-600 focus:ring focus:ring-primary-400 focus:ring-opacity-50 active:bg-primary-700 active:border-primary-700 dark:focus:ring-primary-400 dark:focus:ring-opacity-90">
                    <span className={"text-black dark:text-white"}>{items.length === 1 ? `${items.length} ${ITEM_NAME}` : `${items.length} ${ITEM_NAME}s`}</span>
                    <svg onClick={() => {createItem({id: itemCount, name: "demo"}); setItemCount(itemCount + 1)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="dark:text-white text-black w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>

            </div>
        </div>
    )
}

export default RootPage
