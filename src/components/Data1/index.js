import React, { useState, useEffect } from "react";
import DataChangeAsset from "./DataChangeAsset";
import DataChangeMenu from "./DataChangeMenu";
import DataChangeOrderBook from "./DataChangeOrderBook";
import "./style.scss";
function Data1(props) {
  const { view } = props;
  console.log("🚀 ~ view", view);
  const [Open, setOpenView] = useState(1);

  useEffect(() => {
    setOpenView(view);
  }, [view]);
  console.log(view);

  return (
    <div className="data1">
      {Open === 1 ? (
        <DataChangeOrderBook />
      ) : Open === 2 ? (
        <DataChangeMenu />
      ) : Open === 3 ? (
        <DataChangeAsset />
      ) : (
        ""
      )}
    </div>
  );
}

export default Data1;
