import React from "react";
import "./style.scss";
function Footer(props) {
  return (
    <div className="footer">
      <ul>
        <li id="orderBook" style={{ cursor: "pointer" }}>
          Sổ lệnh
        </li>
        <li id="listfooter" style={{ cursor: "pointer" }}>
          Danh mục
        </li>
        <li id="asset" style={{ cursor: "pointer" }}>
          Tài Sản
        </li>
      </ul>
    </div>
  );
}

export default Footer;
