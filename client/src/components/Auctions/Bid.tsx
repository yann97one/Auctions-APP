import {useState} from "react";

function Bid () {

    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    const handleChange = (event: { target: { value: string; }; }) => {
        setValue(parseInt(event.target.value) || 0);
    };

    return (
        <div className="flex flex-wrap -mx-3 mb-5">
            <div className="md:w-1/4 px-2">
                <label htmlFor="Proposition"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ma proposition :</label>
            </div>
            <div className="md:w-1/3 px-2">
                <form className="max-w-xs px-2">
                    <div className="relative flex items-center max-w-[8rem]">
                        <button
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="quantity-input"
                            onClick={handleDecrement}
                            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                            <svg
                                className="w-3 h-3 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h16"
                                />
                            </svg>
                        </button>
                        <input
                            type="text"
                            id="quantity-input"
                            data-input-counter=""
                            value={value}
                            onChange={handleChange}
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="999"
                            required
                        />
                        <button
                            type="button"
                            id="increment-button"
                            onClick={handleIncrement}
                            data-input-counter-increment="quantity-input"
                            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                            <svg
                                className="w-3 h-3 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            <div className="md:w-1/3 px-2">
                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Enchérir
                </button>
            </div>
        </div>
    )
}

export default Bid;