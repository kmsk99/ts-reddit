function Subreddits() {
    return (
        <aside className="hidden lg:block lg:grid-start-3 xl:grid-start-4 grid-span-1 row-start-2 bg-white shadow-lg p-5">
            <h2 className="text-2xl font-bold font-mono mb-2.5">Subreddits</h2>
            <li className="h-16 w-full pl-2 bg-white flex">
                <button className="items-center bg-white w-full h-full flex">
                    <img
                        className="w-8 h-8 mr-2 ml-4"
                        alt="subreddits-icon"
                        src="https://a.thumbs.redditmedia.com/E0Bkwgwe5TkVLflBA7WMe9fMSC7DV2UOeff-UpNJeb0.png"
                    />
                    <p className="text-sm font-semibold">blabla</p>
                </button>
            </li>
            <li className="h-16 w-full pl-2 bg-blue-600 flex">
                <button className="items-center bg-indigo-100 w-full h-full flex">
                    <img
                        className="w-8 h-8 mr-2 ml-4"
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

export default Subreddits;
