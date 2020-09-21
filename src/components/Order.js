import React, { useState } from 'react';
import Nav from '../store/nav';
import '../store/style/app.scss';
import ItemPage from '../store/itemPage';
import CartPage from '../store/CartPage';
import { items } from '../store/static-data';
import Form from '../store/Form';

const summmarizeCart = cart => {
  const groupedItems = cart.reduce((summary, item) => {
  summary[item.id] = summary[item.id] || {
  ...item,
  count: 0,
  };
  summary[item.id].count++;
  return summary;
  }, {});
  return Object.values(groupedItems);
 };

 const StoreApp = () => {
  const [activeTab, setActiveTab] = useState("items");
  

  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
};
 

const removeItem = item => {
  let index = cart.findIndex(i => i.id === item.id);
  if (index >= 0)
    setCart(cart => {
      const copy = [...cart];
      copy.splice(index, 1);
      return copy;
    });
}




  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="App-content">
      <Content
      tab={activeTab}
      onAddToCart={addToCart}
      cart={summmarizeCart(cart)}
      />
      </main>
    </div>
  
  )
  };


const Content = ({tab, onAddToCart, cart, onRemoveItem}) => {
 switch (tab) {
 default:
 case 'items':
 return (
 <ItemPage 
  items={items} 
  onAddToCart={onAddToCart} 
  />
 )
  
case'cart':
 return (
 <CartPage items={cart}
 onAddOne={onAddToCart}
 onRemoveOne={onRemoveItem}
 />
 
 ); 
}
};



 
export default StoreApp;