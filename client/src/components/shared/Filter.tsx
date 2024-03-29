import {Article} from "@api/articleService/types";

interface Props {
    articles: Article[];
    setArticles: (articles: Article[]) => void;
}

function Filter(props: Props) {
    const {articles, setArticles} = props;

    const onSearch = (event) => {
        console.log(event.target.value);

        if (event.target.value === "") setArticles(articles);
        setArticles(
            articles.filter((article) =>
                article.name
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
            )
        );
    };

    return (
        <div className="max-w-md ml-16">
            <form>
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative ">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Rechercher un produit..."
                        onChange={onSearch}
                        required
                    />
                </div>
            </form>

            <div className="my-4 max-w-xs">
                <details
                    className="overflow-hidden bg-gray-50 rounded-lg border border-gray-300 [&_summary::-webkit-details-marker]:hidden ">
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-2 bg-gray-50 p-4 text-gray-900 transition ">
                        <span className="text-sm font-medium"> Catégorie </span>

                        <span className="transition group-open:-rotate-180">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-gray-50">
                        <header className="flex items-center justify-between p-4">
                            <span className="text-sm text-gray-700"> 0 Selected </span>

                            <button
                                type="button"
                                className="text-sm text-gray-900 underline underline-offset-4"
                            >
                                Reset
                            </button>
                        </header>

                        <ul className="space-y-1 border-t border-gray-200 p-4">
                            <li>
                                <label
                                    htmlFor="FilterInformatique"
                                    className="inline-flex items-center gap-2"
                                >
                                    <input
                                        type="checkbox"
                                        id="FilterInformatique"
                                        className="size-5 rounded border-gray-300"
                                    />

                                    <span className="text-sm font-medium text-gray-700">
                    {" "}
                                        Informatique{" "}
                  </span>
                                </label>
                            </li>

                            <li>
                                <label
                                    htmlFor="FilterAmeublement"
                                    className="inline-flex items-center gap-2"
                                >
                                    <input
                                        type="checkbox"
                                        id="FilterAmeublement"
                                        className="size-5 rounded border-gray-300"
                                    />

                                    <span className="text-sm font-medium text-gray-700">
                    {" "}
                                        Ameublement{" "}
                  </span>
                                </label>
                            </li>

                            <li>
                                <label
                                    htmlFor="FilterVetement"
                                    className="inline-flex items-center gap-2"
                                >
                                    <input
                                        type="checkbox"
                                        id="FilterVetement"
                                        className="size-5 rounded border-gray-300"
                                    />

                                    <span className="text-sm font-medium text-gray-700">
                    {" "}
                                        Vêtement{" "}
                  </span>
                                </label>
                            </li>

                            <li>
                                <label
                                    htmlFor="FilterSport&Loisirs"
                                    className="inline-flex items-center gap-2"
                                >
                                    <input
                                        type="checkbox"
                                        id="FilterSport&Loisirs"
                                        className="size-5 rounded border-gray-300"
                                    />

                                    <span className="text-sm font-medium text-gray-700">
                    {" "}
                                        Sport & loisirs{" "}
                  </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    );
}

export default Filter;
