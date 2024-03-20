interface Props {
  image: string;
  title: string;
  price: number;
  endDate: Date;
  seller: string;
}

function AuctionCard(props: Props) {
  const { title, price, endDate, seller, image } = props;

  return (
    <>
      <a
        href="#"
        className="group relative block max-w-xs mx-3 my-3 overflow-hidden"
      >
        <img
          src={image}
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
        <div className="relative border border-gray-100 bg-white p-6">
          <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-1.5 text-sm text-gray-700">${price}</p>
          <p className="mt-1.5 text-sm text-gray-700">
            Fin de l'enchère : {endDate.toLocaleDateString()}
          </p>
          <br />

          <a
            href={`/seller/${seller}`}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Vendeur :{seller}
          </a>
        </div>
      </a>
    </>
  );
}

export default AuctionCard;
