import { FilterLog, Filter } from "@components/shared";
import { AuctionsList } from "@components/auctions";
import { useEffect, useState } from "react";
import { Auction } from "@/api/auctionsService/type";
import { apiClient } from "@/api";

function Home() {
  const [auctions, setAuctions] = useState<Auction[]>([]);

  const getAuctions = async () => {
    const response = await apiClient.auctions.getAuctionsList();
    console.log(response);
    setAuctions(response);
  };

  useEffect(() => {
    getAuctions();
  }, []);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col  w-1/3">
        <div className="sticky top-12">
          <Filter auctions={auctions} setAuctions={setAuctions} />
          <FilterLog auctions={auctions} setAuctions={setAuctions} />
        </div>
      </div>
      <div className="flex flex-col w-2/3">
        <AuctionsList auctions={auctions} />
      </div>
    </div>
  );
}

export default Home;
