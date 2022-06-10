import { Link } from "react-router-dom";
import "./Product.css";


import { Publish } from "@mui/icons-material";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Events</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
             
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  
                  <span className="productName">Events</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Number Of Events:</span>
                      <span className="productInfoValue">8</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Participants:</span>
                      <span className="productInfoValue">All</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Events completed:</span>
                      <span className="productInfoValue"> none</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Event Name</label>
                  <input type="text" placeholder="Events" />
                  <label>Paricipate</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                 
              </div>
          </form>
      </div>
    </div>
  );
}