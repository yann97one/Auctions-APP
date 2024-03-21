import Datepicker from "../shared/Datepicker";
import { useNavigate } from "react-router-dom";
import { ChangeEventHandler, useState } from "react";
import {
  Article,
  ArticleCreation,
  Auction,
  AuctionCreation,
} from "@/api/auctionsService/type";

function ImageUpload() {
  const [file, setFile] = useState<string | null>(null);

  const onFileUploaded: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setFile(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
      //setAuction({ ...auction, image: selectedFile });
    }
  };

  const border = file ? "border-solid" : "border-dashed";
  const clearFile = () => {
    setFile(null);
    const fileInput = document.getElementById("upload") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ""; // Clear selected file from input
    }
  };

  return (
    <div
      className={`max-w-sm p-6 mb-4 bg-gray-100 border-2 ${border} border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer`}
    >
      {file ? (
        <div onClick={clearFile}>
          <img
            src={file}
            alt="Preview"
            className="w-full h-48 object-cover mb-4 rounded-lg cursor-pointer"
          />
        </div>
      ) : (
        <label
          htmlFor="upload"
          className="cursor-pointer flex flex-col items-center"
        >
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
            Upload picture
          </h5>
          <p className="font-normal text-sm text-gray-400 md:px-6">
            Choose photo size should be less than{" "}
            <b className="text-gray-600">2mb</b>
          </p>
          <p className="font-normal text-sm text-gray-400 md:px-6">
            and should be in <b className="text-gray-600">JPG, PNG, or GIF</b>{" "}
            format.
          </p>
          <span id="filename" className="text-gray-500 bg-gray-200 z-50"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-gray-700 mx-auto mt-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
          </svg>
          <input
            id="upload"
            type="file"
            className="hidden"
            accept="image/*"
            value={file!}
            onChange={onFileUploaded}
          />
        </label>
      )}
    </div>
  );
}

const INITIAL_ARTICLE: ArticleCreation = {
  name: "",
  description: "",
  beginDate: new Date(),
  endDate: new Date(),
  image: "",
  initialPrice: 0,
  sellPrice: 0,
  userId: "",
  idCategory: "",
};

const INITIAL_AUCTION: AuctionCreation = {
  title: "",
  amount: 0,
  sellerPseudo: "",
};

function AuctionCreation() {
  const navigate = useNavigate();
  const [auction, setAuction] = useState<AuctionCreation>(INITIAL_AUCTION);

  const [article, setArticle] = useState<ArticleCreation>(INITIAL_ARTICLE);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-1/3">
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
          <div className="px-4 py-6">
            <ImageUpload />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-96">
        <form>
          <label
            htmlFor="Article"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Article :
          </label>
          <input
            type="text"
            id="Article"
            onChange={(event) =>
              setArticle({ ...article, name: event.target.value })
            }
            className="shadow-sm max-w-sm my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description :
          </label>
          <textarea
            id="message"
            onChange={(event) =>
              setArticle({ ...article, description: event.target.value })
            }
            rows={4}
            className="block max-w-sm my-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={""}
          />
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Catégorie :
          </label>
          <select
            onChange={(event) =>
              setArticle({ ...article, idCategory: event.target.value })
            }
            id="countries"
            className="bg-gray-50 max-w-sm my-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choisir une catégorie</option>
            <option value="1">Informatique</option>
            <option value="2">Ameublement</option>
            <option value="3">Vêtement</option>
            <option value="4">Sport & loisirs</option>
          </select>

          <label
            htmlFor="MaP"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mise à prix :
          </label>
          <input
            type="number"
            id="MaP"
            onChange={(event) =>
              setArticle({
                ...article,
                initialPrice: event.target.value,
              })
            }
            className="shadow-sm max-w-sm my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />

          <div className="relative max-w-xs">
            <label
              htmlFor="StartAuction"
              className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Début de l'enchère :
            </label>
            <div className="absolute my-2 inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <Datepicker />
          </div>

          <div className="relative max-w-xs">
            <label
              htmlFor="EndAuction"
              className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Fin de l'enchère :
            </label>
            <div className="absolute my-2 inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <Datepicker />
          </div>

          <br></br>

          <div className="flex flex-col justify-center py-2 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-2 space-y-4 md:space-y-2 sm:p-5">
                <h6 className="text-xl font-medium text-gray-900 dark:text-white">
                  Retrait
                </h6>
                <label
                  htmlFor="Rue"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Rue :
                </label>
                <input
                  type="text"
                  id="Rue"
                  className="shadow-sm max-w-xs my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
                <label
                  htmlFor="Cp"
                  className="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                  Code postal :
                </label>
                <input
                  type="text"
                  id="Cp"
                  className="shadow-sm max-w-xs my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
                <label
                  htmlFor="Ville"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ville :
                </label>
                <input
                  type="text"
                  id="Ville"
                  className="shadow-sm max-w-xs my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
            </div>
          </div>
          <br></br>

          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="sm:w-1/3 px-2">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Créer
              </button>
            </div>
            <div className="sm:w-1/3 px-2">
              <button
                onClick={() => console.log()}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Annuler
              </button>
            </div>
            <div className="sm:w-1/3 px-2">
              <button
                onClick={() => console.log()}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Annuler la vente
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuctionCreation;
