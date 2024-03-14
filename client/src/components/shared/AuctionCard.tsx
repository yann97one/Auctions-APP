
function AuctionCard() {

    return (
        <>
        <a href="#" className="group relative block max-w-xs mx-3 my-3 overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />
            <div className="relative border border-gray-100 bg-white p-6">
    <span className="whitespace-nowrap bg-primary-600 text-white px-3 py-1.5 text-xs font-medium rounded">
      {" "}
        New{" "}
    </span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Fauteuil</h3>
                <p className="mt-1.5 text-sm text-gray-700">$14.99</p>
                <p className="mt-1.5 text-sm text-gray-700">Fin de l'enchère : 01/01/2000</p>
                <br/>
                <p className="mt-1.5 text-sm text-gray-700">Vendeur : {" "}
                    <a
                        href="/#"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                        aaa
                    </a>
                </p>
            </div>
        </a>
        </>


);
}

export default AuctionCard;