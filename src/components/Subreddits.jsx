export default function Subreddits() {
    return (
        <aside className="hidden row-start-2 p-5 bg-white shadow-lg lg:block lg:grid-start-3 xl:grid-start-4 grid-span-1">
            <h2 className="text-2xl font-bold font-mono mb-2.5">Subreddits</h2>
            <li className="flex w-full h-16 pl-2 bg-white">
                <button className="flex items-center w-full h-full bg-white">
                    <img
                        className="w-8 h-8 ml-4 mr-2"
                        alt="subreddits-icon"
                        src="https://a.thumbs.redditmedia.com/E0Bkwgwe5TkVLflBA7WMe9fMSC7DV2UOeff-UpNJeb0.png"
                    />
                    <p className="text-sm font-semibold">blabla</p>
                </button>
            </li>
            <li className="flex w-full h-16 pl-2 bg-blue-600">
                <button className="flex items-center w-full h-full bg-indigo-100">
                    <img
                        className="w-8 h-8 ml-4 mr-2"
                        alt="subreddits-icon"
                        src="https://a.thumbs.redditmedia.com/E0Bkwgwe5TkVLflBA7WMe9fMSC7DV2UOeff-UpNJeb0.png"
                    />
                    <p className="text-sm font-semibold text-blue-600">
                        blabla
                    </p>
                </button>
            </li>
        </aside>
    );
}
