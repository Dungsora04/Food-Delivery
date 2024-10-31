import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>
          Embark on a culinary adventure! Explore a world of flavors you never
          knew existed. Order your perfect meal today and discover a taste
          sensation that will leave you wanting more.
        </p>
        {/* <button>View Menu</button> */}
      </div>
    </div>
  );
};

export default Header;
