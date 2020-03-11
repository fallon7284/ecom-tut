import React from "react";
import "./homepage.styles.scss";

export default () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1>Hats</h1>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Jackets</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1>Sneakers</h1>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1>Womens</h1>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1>Mens</h1>
            <span>Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};
