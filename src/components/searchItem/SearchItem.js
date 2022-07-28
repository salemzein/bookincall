import React from "react";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="./imges/24.jpg" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">TOWER Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxtOp">Free Airport Taxi</span>
        <span className="siSubtitle">
          Studio Apartments with Air conditioning
        </span>
        <span className="siFeatures">
          Entire Studio . 1 bathroom . 12rm 1full bed
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOptoitle">
          You can cancel latter ,so lock in this great Price today
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes Taxes And Fees</span>
          <button className="siCheckButton">See Availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
