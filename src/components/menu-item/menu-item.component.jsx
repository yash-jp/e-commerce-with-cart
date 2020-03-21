import React from "react";
import "./menu-item.styles.scss";

import {Link} from 'react-router-dom';

const MenuItem = ({ history,title, imageUrl,size,linkUrl }) => (
<div onClick={()=>history.push(`/${linkUrl}`)}
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    className={`${size} menu-item`}
  >
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
