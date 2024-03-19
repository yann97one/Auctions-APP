import Filter from "../shared/Filter";
import FilterLog from "../shared/FilterLog";
import AuctionCard from "../shared/AuctionCard";

function Home() {

    return (

        <div className="flex flex-row">
                <div className="flex flex-col  w-1/3">
                    <div className="sticky top-12">
                        <Filter/>
                        <FilterLog/>
                    </div>
                </div>
                <div className="flex flex-col w-2/3">
                    <div className="flex flex-row">
                        <AuctionCard/>
                        <AuctionCard/>
                        <AuctionCard/>
                    </div>
                    <div className="flex flex-row">
                        <AuctionCard/>
                        <AuctionCard/>
                        <AuctionCard/>
                    </div>
                    <div className="flex flex-row">
                        <AuctionCard/>
                        <AuctionCard/>
                        <AuctionCard/>
                    </div>
                </div>
            </div>
    );
}

export default Home;