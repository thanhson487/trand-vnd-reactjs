import React from "react";
import Data1 from "../../components/Data1/index";
import Data2 from "../../components/Data2/index";
import Historydeal from "../../components/Historydeal";
import ListDataDeal from "../../components/ListDataDeal";
import TradeViewCardBottom from "../../components/TradeViewCardBottom";
import TradeViewCardTop from "../../components/TradeViewCardTop";
import Footer from "../Footer";
import "./style.scss";

function Main(props) {
  return (
    <>
      <main className="main">
        <div className="main__left">
          <TradeViewCardTop />
          <Historydeal />
          <TradeViewCardBottom />
          <ListDataDeal />
        </div>
        <div className="main__right">
          <Data1 />
          <Data2 />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Main;
