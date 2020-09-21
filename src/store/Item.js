import React from 'react';
import './style/item.scss';


const Item = ({item, children}) => (
    <div className="Item">
    <div className="Item-left">
    <div className="Item-image"></div>
    <div className="Item-title">{item.name}</div>
    <div className="Item-description">{item.description}</div>
    </div>
    <div className="Item-right">
        <div className="Item-price">
            ${item.price}
        </div>
        {children}
    </div>
    </div>
   );
   export default Item;
   
