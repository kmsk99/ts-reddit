function RedditCard() {
    return (
        <article className="col-start-1 lg:col-span-2 xl:col-span-3 row-start-2 bg-white shadow-lg p-5 mb-8 mx-5 lg:mr-0">
            <div className="flex">
                <div className="flex-none w-16">
                    <form className="text-center mr-5">
                        <button className="up-vote">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    d="M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115-1.17-1.169-1.17-3.073 0-4.242l7.121-7.121 7.121 7.121c1.17 1.169 1.17 3.073 0 4.242-1.094 1.095-2.979 1.14-4.121.115v4.764c0 1.654-1.346 3-3 3zm-1-12.586v9.586c0 .551.448 1 1 1s1-.449 1-1v-9.586l3.293 3.293c.379.378 1.035.378 1.414 0 .391-.391.391-1.023 0-1.414l-5.707-5.707-5.707 5.707c-.391.391-.391 1.023 0 1.414.379.378 1.035.378 1.414 0l3.293-3.293z"
                                    stroke="#717171"
                                    fill="#717171"
                                    strokeWidth="0px"
                                />
                            </svg>
                        </button>
                        <p className="font-mono font-bold text-gray-500">10</p>
                        <button className="down-vote">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    d="M12 21.312l-7.121-7.121c-1.17-1.17-1.17-3.073 0-4.242 1.094-1.094 2.978-1.138 4.121-.115v-4.834c0-1.654 1.346-3 3-3s3 1.346 3 3v4.834c1.143-1.023 3.027-.979 4.121.115 1.17 1.169 1.17 3.072 0 4.242l-7.121 7.121zm-5-10.242c-.268 0-.518.104-.707.293-.391.39-.391 1.023 0 1.414l5.707 5.707 5.707-5.707c.391-.391.391-1.024 0-1.414-.379-.379-1.035-.379-1.414 0l-3.293 3.293v-9.656c0-.551-.448-1-1-1s-1 .449-1 1v9.656l-3.293-3.293c-.189-.189-.439-.293-.707-.293z"
                                    stroke="#717171"
                                    fill="#717171"
                                    strokeWidth="0px"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
                <div className="flex-auto">
                    <h3 className="text-xl font-mono font-bold mb-2.5">
                        reddit name
                    </h3>
                    <img
                        className="w-full rounded-2xl"
                        src="https://i.redd.it/3roem6yxnas71.jpg"
                        alt="reddit-img"
                    />
                    <hr className="m-4" />
                    <div className="flex justify-items-center items-center justify-between px-5">
                        <p className="flex-none text-xs text-blue-900 font-mono font-bold">
                            upload-name
                        </p>
                        <p className="flex-none text-xs font-mono">
                            8 hours-ago
                        </p>
                        <button className="flex-none flex ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 inline-block items-center"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    d="M18 7c.542 0 1 .458 1 1v7c0 .542-.458 1-1 1h-8.829l-.171.171v-.171h-3c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12m0-2h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3h1v3l3-3h8c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3z"
                                    style={{}}
                                />
                            </svg>
                            <p className="text-xs font-mono inline-block">
                                comment
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default RedditCard;
