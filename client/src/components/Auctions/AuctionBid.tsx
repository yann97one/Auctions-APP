function AuctionBid () {

    return (
        <div>
            <div className="flex flex-row">
                <div className="flex flex-col w-1/3">
                    <figure className="max-w-lg px-6">
                        <img
                            className="h-auto max-w-full rounded-lg items-center "
                            src="/src/assets/Capture.PNG"
                            alt="image description"
                        />
                        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                            Image caption
                        </figcaption>
                    </figure>
                </div>
                <div className="flex flex-col w-2/3">
                    <div className="flex flex-wrap -mx-3 mb-5">
                        <div className="md:w-1/4 ">
                    </div>
                        <div className="md:w-1/4">
                            <label htmlFor="Prénom"
                                   className="block mb-7 text-sm font-medium text-gray-900 dark:text-white px-8 ">
                                Détail vente</label>
                    </div>
                    </div>
                    <label htmlFor="Prénom"
                           className="block mb-7 text-sm font-medium text-gray-900 dark:text-white px-2 -mx-3 ">
                        PC gamer pour travailler</label>

                    <div className="flex flex-wrap -mx-3 mb-5">
                        <div className="md:w-1/4 px-2">
                            <label htmlFor="Prénom"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Description :</label>
                        </div>
                        <div className="md:w-1/3 px-2">
                            <label htmlFor="Nom"
                                   className="block overflow-hidden mb-2 text-sm font-medium text-gray-500 dark:text-white ">
                                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</label>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-5">
                        <div className="md:w-1/4 px-2">
                            <label htmlFor="Prénom"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Prénom</label>
                        </div>
                        <div className="md:w-1/3 px-2">
                            <label htmlFor="Nom"
                                   className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                                aaaaaaaa</label>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-5">
                        <div className="md:w-1/4 px-2">
                            <label htmlFor="Prénom"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Prénom</label>
                        </div>
                        <div className="md:w-1/3 px-2">
                            <label htmlFor="Nom"
                                   className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                                aaaaaaaa</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuctionBid;