import React, { useState } from "react";
import ShowDataTop from "../../pages/TradeVND/components/ShowDataTop";
import PlaceForm from "../../pages/TradeVND/components/PlaceForm";
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
          <ShowDataTop view={view} />
          <PlaceForm />
        </div>
        <Footer openView={openView} />
      </div>
    </>
  );
}

export default Main;
