import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Events</h1>
      <form className="addProductForm">
        <div className="addProductItem">
         
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Name Of Events" />
        </div>
        <div className="addProductItem">
          <label>No.of Participants</label>
          <input type="text" placeholder="1.2.3.." />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}