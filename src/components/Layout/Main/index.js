import React from "react";
import Data1 from "../../Data1";
import Data2 from "../../Data2";
import Historydeal from "../../Historydeal";
import ListDataDeal from "../../ListDataDeal";
import TradeViewCardBottom from "../../TradeViewCardBottom";
import TradeViewCardTop from "../../TradeViewCardTop";
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
