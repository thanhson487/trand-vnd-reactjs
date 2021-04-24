import React, { useState } from "react";
import Data1 from "../../pages/TradeVND/components/Data1";
import Data2 from "../../pages/TradeVND/components/Data2";
import Historydeal from "../../pages/TradeVND/components/Historydeal";
import ListDataDeal from "../../pages/TradeVND/components/ListDataDeal";
import TradeViewCardBottom from "../../pages/TradeVND/components/TradeViewCardTop";
import TradeViewCardTop from "../../pages/TradeVND/components/TradeViewCardTop";
import Footer from "../Footer";
import "./style.scss";

function Main(props) {
  const [view, setView] = useState(1);

  const openView = (value) => {
    setView(value);
  };

  return (
    <>
      <div className="main">
        <div className="main__left">
          <TradeViewCardTop />
          <Historydeal />
          <TradeViewCardBottom />
          <ListDataDeal />
        </div>
        <div className="main__right">
          <Data1 view={view} />
          <Data2 />
        </div>
        <Footer openView={openView} />
      </div>
    </>
  );
}

export default Main;
