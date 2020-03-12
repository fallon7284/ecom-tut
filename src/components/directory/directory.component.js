import React from "react";
import { MenuItem } from "../index";
import "./directory.styles.scss";

export default class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl: `http://www.robohash.org/${Math.floor(Math.random() * 25)}`
        },
        {
          title: "Jackets",
          imageUrl: `http://www.robohash.org/${Math.floor(Math.random() * 25)}`
        },
        {
          title: "Sneakers",
          imageUrl: `http://www.robohash.org/${Math.floor(Math.random() * 25)}`
        },
        {
          title: "Mens",
          imageUrl: `http://www.robohash.org/${Math.floor(Math.random() * 25)}`
        },
        {
          title: "Womens",
          imageUrl: `http://www.robohash.org/${Math.floor(Math.random() * 25)}`
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, key }) => {
          return <MenuItem key={key} title={title} />;
        })}
      </div>
    );
  }
}
