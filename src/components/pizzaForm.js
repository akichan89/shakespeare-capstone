import React from 'react';
import '../store/style/pizzaForm.scss';
class PizzaApp extends React.Component {
 state = {
 size: 'medium',
 glutenFree: false,
 topping: '',
 instructions: '',
 pizzaName: null,
 email: null,
 password: null,
 date: '',
 errors: {
 pizzaName: '',
 email: '',
 password: '',
 }
 };
 setSize = event => {
 this.setState({
 size: event.target.value
 });
 };
 setGlutenFree = event => {
 this.setState({
 glutenFree: event.target.value
 });
 };
 setInstructions = event => {
 this.setState({
 instructions: event.target.value
 });
 };
 setTopping = event => {
 this.setState({
 topping: event.target.value
 });

 setDate = event => {
    this.setState({
    date: event.target.value
    });
    }

 };
 handleSubmit = event => {
 event.preventDefault();
 const {
 size,
 glutenFree,
 topping,
 instructions,
 date
 } = this.setState;
 alert(`Your order:
 Size: ${ size}
 Gluten free ? ${glutenFree ? 'yes' : 'no'}
 Topping: ${topping || 'none'}
 Special instructions: ${instructions || 'none'}
 Appointment created for ${name} On ${date}`);
 };
 render() {
 const {
 size,
 glutenFree,
 instructions,
 topping,
 date
 } = this.setState;
 return (

    <div className="wrapper">
 <div className="form-wrapper">
 <h1>Order Your Dragon Pal</h1>
 <form onSubmit={this.handleSubmit}>
 <div className="pizzaName">
 <label>Name</label>
 <input type="text"
 name="pizzaName"
 onChange={this.handleChange}
 />
 </div>
 <div className="email">
 <label>Email</label>
 <input type="email"
 name="email"
 onChange={this.handleChange}
 />
 </div>
 <div className="password">
 <label>Password</label>
 <input type="password"
 name="password"
 onChange={this.handleChange}
 />
 </div>
 <label>
 <input
 type="radio"
 value="small"
 checked={size === 'small'}
 onChange={this.setSize}
 />
 Small
 </label>
 <label>
 <input
 type="radio"
 value="medium"
 checked={size === 'medium'}
 onChange={this.setSize}
 />
 Medium
 </label>
 <label>
 <input
 type="radio"
 value="large"
 checked={size === 'large'}
 onChange={this.setSize}
 />
 Large
 </label>
 <br />
 <br />
 <div className="topping">
 <label>
 Morph Colors
 <br />
 <select onChange={this.setTopping} value={topping}>
 <option value="">- Pick a Dragon Pal's Color -</option>
 <option value="pepperoni">Standard</option>
 <option value="peppers+onions">Red
</option>
 <option value="pineapple">Orange</option>
 <option value="black">Black</option>
 <option value="white">Albine-White</option>
 </select>
 </label>
 </div>
 <br />
 <br />
 <label>
 <input type="checkbox"
 checked={glutenFree}
 onChange={this.setGlutenFree} />
 Check Box to Confirm you Super Believe in your Dragon Pal
 </label>
 <br />
 <br />
 <div className="instructions">
 <label>
 Special instructions:
 <br />
 <textarea
 value={instructions}
 onChange={this.setInstructions}
 />
 </label>
 </div>
 
 <br />
 <div className="appointment">
     
 <label>
 Schedule Appointment:
 <br />
 <textarea
 value={date}
 onChange={this.setDate}
 />
 </label>

 
 </div>
 <br />
 <button type="submit"> Complete Order Request </button>
 </form>
 </div>
 </div>
 );
 }
}
export default PizzaApp;