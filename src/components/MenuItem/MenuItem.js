import React from "react";
import "./MenuItem.styles.scss";

export default ({ title, imageUrl }) => {
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};
