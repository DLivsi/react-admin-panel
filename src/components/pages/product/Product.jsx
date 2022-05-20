import React from "react";
import "./Product.css";
import Chart from "../../chart/Chart";
import { productData } from "../../../dummyData";
import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} datakey="Sales" title="Sales Performans" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://teek.ru/upload/iblock/21f/21fa13ae3b18e17af3ce892785b8c8e9.png"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form action="" className="productForm">
          <div className="productFormLeft">
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder="Apple Airpods" />
            <label htmlFor="">In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://teek.ru/upload/iblock/21f/21fa13ae3b18e17af3ce892785b8c8e9.png"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
            </div>
            <input type="file" id="file" style={{ display: "none" }} />
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
