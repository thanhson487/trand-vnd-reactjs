import React from "react";
import "./style.scss";

function Historydeal(props) {
  return (
    <>
      <div className="historydeal">
        <ul>
          <li>
            <p>VN30F2104</p>
          </li>
          <li>
            <span>Sàn: </span>
            <br />
            <span className="san">1090.9</span>
          </li>
          <li>
            <span>TC: </span>
            <br />
            <span className="tc">2253.9</span>
          </li>
          <li>
            <span>Trần: </span>
            <br />
            <span className="tran">5623.9</span>
          </li>
        </ul>
        <div className="historydeal__title-row">
          <div>
            <a className="price" href={0}>
              Bước giá
            </a>
            <a className="historyData" href={0}>
              Lịch sử khớp lệnh
            </a>
          </div>
        </div>
        <div className="historydeal__row">
          <div className="historydeal__row--buy">
            <div>
              <p>KL Mua</p>
            </div>
            <div>Giá Mua</div>
          </div>
          <div className="historydeal__row--sell">
            <div>Giá Bán</div>
            <div>KL Bán</div>
          </div>
        </div>
        <div className="historydeal__row--data">
          <div className="historydeal__row--data--buy--data">
            <div className="buy-kl">
              <p>15</p>
              <p>3242.23</p>
            </div>
            <div className="buy-kl">
              <p>14</p>
              <p>4356.23</p>
            </div>
            <div className="buy-kl">
              <p>13</p>
              <p>4356.23</p>
            </div>
            <div className="buy-kl">
              <p>86</p>
              <p>4356.23</p>
            </div>
            <div className="buy-kl">
              <p>15</p>
              <p>4356.23</p>
            </div>
          </div>
          <div className="historydeal__row--data--sell--data">
            <div className="sell-price">
              <p>5685.42</p>
              <p>16</p>
            </div>
            <div className="sell-price">
              <p>2452.42</p>
              <p>16</p>
            </div>
            <div className="sell-price">
              <p>5685.42</p>
              <p>16</p>
            </div>
            <div className="sell-price">
              <p>5685.42</p>
              <p>16</p>
            </div>
            <div className="sell-price">
              <p>5685.42</p>
              <p>16</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Historydeal;
