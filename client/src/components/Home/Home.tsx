import Filter from "@components/shared/Filter";
import FilterLog from "@components/shared/FilterLog";
import AuctionsList from "@components/Auctions/AuctionsList";

import '../../i18n.js' // ts => import './i18n.ts'
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
                <AuctionsList/>
            </div>
        </div>
    );
}

export default Home;