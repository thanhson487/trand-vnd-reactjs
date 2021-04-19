import React from "react";
import "./style.scss";
function Data1(props) {
  return (
    <div className="data1">
      <div id="datachangeasset">
        <div className="title-header">
          <p>Thông tin tài sản</p>
          <div className="list-icons">
            <div>
              <i
                className="fa fa-sync"
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
              <i
                className="fa fa-external-link"
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
            </div>

            <i className="fa fa-minus close hideTabRight" id=""></i>
          </div>
        </div>
        <div>
          <div className="title-group">
            <p>Tài sản ròng</p>
            <p>40,000,000</p>
          </div>
          <div className="title-group">
            <p>Số dư ký quỹ</p>
            <p>40,000,000</p>
          </div>
          <div className="title-group">
            <p>Thuế và phí</p>
            <p>0</p>
          </div>
        </div>
      </div>
      <div className="datachangeorderBook">
        <div className="title-header">
          <p className="comeinandDay comeinandDay--action">Lệnh trong ngày</p>
          <p className="conditionalOrder conditionalOrder--action">
            Lệnh điều kiện
          </p>
          <p className="title-header__icon">
            <i
              className="fa fa-sync"
              style={{ marginRight: "10px", cursor: "pointer" }}
            />

            <i
              className="fa fa-minus close hideTabRight"
              style={{ cursor: "pointer" }}
              id
            />
          </p>
        </div>
        <div className="title-table conditionalOrder-day">
          <p>Lệnh</p>
          <p>Mã</p>
          <p>KL Khớp</p>
          <p>Giá</p>
          <p>TT</p>
        </div>
        <div className="title-table conditionalOrder-menu">
          <p>Lệnh</p>
          <p>Mã</p>
          <p>Giá kích hoạt</p>
          <p>KL</p>
          <p>Giá</p>
          <p>Ngày hết hạn</p>
          <p>TT</p>
        </div>
        <div className="data-show">
          <div className="data-show__detail">
            <p>Mua</p>
            <p>VN30F2104</p>
            <p>
              <span>0/</span>21
            </p>
            <p>1,111.0</p>
            <p>
              <i className="fa fa-minus-circle"></i>
            </p>
          </div>
          <div className="data-show__detail">
            <p>Mua</p>
            <p>VN30F2104</p>
            <p>
              <span>0/</span>21
            </p>
            <p>1,111.0</p>
            <p>
              <i className="fa fa-minus-circle"></i>
            </p>
          </div>
        </div>
      </div>

      <div className="datachangeMenu">
        <div className="title-header">
          <p className="comeinandDay openTaste--action">Vị thế mở</p>
          <p className="conditionalOrder openTaste--close">Vị thế đóng</p>
          <p className="title-header__icon">
            <i
              className="fa fa-sync"
              style={{ marginRight: "10rem", cursor: "pointer" }}
            />

            <i
              className="fa fa-minus close hideTabRight"
              style={{ cursor: "pointer" }}
              id
            />
          </p>
        </div>
        <div className="title-table openTaste">
          <p>Mã</p>
          <p>KL</p>
          <p>Giá vốn</p>
          <p>Giá hiện tại</p>
          <p>+/-</p>
        </div>
        <div className="title-table closeTaste">
          <p>Mã</p>
          <p>KL</p>
          <p>Giá mua</p>
          <p>Giá bán</p>
          <p>Lãi/Lỗ đã thực hiện</p>
        </div>
        <div className="data-show">
          <div className="data-show__detail">
            <p>VN30F2104</p>
            <p>1</p>
            <p>
              <span>0/</span>21
            </p>
            <p>1,111.0</p>
            <p>
              <i className="fa fa-minus-circle"></i>
            </p>
          </div>
          <div className="data-show__detail">
            <p>VN30F2104</p>
            <p>2</p>
            <p>
              <span>0/</span>21
            </p>
            <p>1,111.0</p>
            <p>
              <i className="fa fa-minus-circle"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data1;
