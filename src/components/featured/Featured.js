import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="./imges/22.jpg" alt="img" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Luxor</h1>
          <h2>123 Esna</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="./imges/24.jpg" />
        <div className="featuredTitles">
          <h1>Luxor</h1>
          <h2>123 Esna</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="./imges/sa.jpg" alt="ssssssssssss" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Luxor</h1>
          <h2>123 Esna</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
