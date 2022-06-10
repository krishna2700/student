import "./Featuresinfo.css";


export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">HTML CSS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          
        </div>
        
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">JavaScript</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          
        </div>
       
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">REACT</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          
        </div>
        
      </div>
    </div>
  );
}
