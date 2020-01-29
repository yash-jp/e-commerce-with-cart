import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title,image,size,history,linkUrl,match})=>{
  console.log(linkUrl);
  return(
    <div style={
      {backgroundImage:`url(${image})`}
    } className={`menu-item ${size}`}
    onClick={()=>history.push(`${match.url}${linkUrl}`)}>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem);