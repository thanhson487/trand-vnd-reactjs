import React from "react";
import "./style.scss";
function ListDataDeal(props) {
  return (
    <div className="listDataDeal">
      <div className="wrap1">
        <div className="listDataDeal__title">
          <p>Mã</p>
          <p>Giá</p>
          <p className="flex flex-align-center">
            <i className="fal fa-caret-left" />
            +/- <i className="fal fa-caret-right" />
          </p>
          <p>Lệch</p>
          <p>Tổng KL</p>
        </div>
        <div className="listDataDeal__data">
          <p>VN30F2104</p>
          <p>1,183</p>
          <p>10.0</p>
          <p>2.93</p>
          <p className="colorffff">166,644</p>
        </div>
        <div className="listDataDeal__data listDataDeal__data--gray">
          <p>VN30F2435</p>
          <p>1,183</p>
          <p>10.0</p>
          <p>2.93</p>
          <p className="colorffff">166,644</p>
        </div>
        <div className="listDataDeal__data">
          <p>VN30F2554</p>
          <p>1,183</p>
          <p>10.0</p>
          <p>2.93</p>
          <p className="colorffff">166,644</p>
        </div>
        <div className="listDataDeal__data listDataDeal__data--gray">
          <p>VN30F2104</p>
          <p>1,183</p>
          <p>10.0</p>
          <p>2.93</p>
          <p className="colorffff">166,644</p>
        </div>
      </div>
    </div>
  );
}

export default ListDataDeal;
