function FilterLog() {

    return (

        <div className="max-w-md ml-16">

            <div className="flex flex-wrap -mx-3 ">
                <div className="md:w-1/2 px-2">
                    <input
                        defaultChecked
                        id="default-radio-1"
                        type="radio"
                        defaultValue=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor="default-radio-1"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Mes achats
                    </label>

                    <div className="ml-6">
                    <div className="flex items-center my-4">
                        <input
                            id="default-checkbox"
                            type="checkbox"
                            defaultValue=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Enchères ouvertes
                        </label>
                    </div>
                    <div className="flex items-center my-4">
                        <input
                            id="checked-checkbox"
                            type="checkbox"
                            defaultValue=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="checked-checkbox"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Mes enchères
                        </label>
                    </div>
                    <div className="flex items-center my-4">
                        <input
                            id="checked-checkbox"
                            type="checkbox"
                            defaultValue=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="checked-checkbox"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Mes enchères remportées
                        </label>
                    </div>
                    </div>
                </div>

                <div className="md:w-1/2 px-2">
                    <input
                        id="default-radio-2"
                        type="radio"
                        defaultValue=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor="default-radio-2"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Mes ventes
                    </label>

                    <div className="ml-6">
                    <div className="flex items-center my-4">
                        <input
                            id="default-checkbox"
                            type="checkbox"
                            defaultValue=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="default-checkbox"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Mes ventes en cours
                        </label>
                    </div>
                    <div className="flex items-center my-4">
                        <input
                            id="checked-checkbox"
                            type="checkbox"
                            defaultValue=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="checked-checkbox"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Ventes non débutées
                        </label>
                    </div>
                    <div className="flex items-center my-4">
                        <input
                            id="checked-checkbox"
                            type="checkbox"
                            defaultValue=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="checked-checkbox"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Ventes terminées
                        </label>
                    </div>
                </div>
            </div>
        </div>
        </div>


    );
}

export default FilterLog;