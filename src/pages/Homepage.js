import React from "react";
import { Directory } from "../components/index";
import "./homepage.styles.scss";

export default ({ history, match, params }) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
