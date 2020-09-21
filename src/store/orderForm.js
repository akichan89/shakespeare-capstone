import React from 'react';
import ReactDOM from 'react-dom';
import '../style/orderForm.scss';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';

export default class OrderForm extends React.Component {

   
    state={

    
        size: 'medium',
        glutenFree: false,
        topping: '',
        instructions: '',
        name: null,
        email: null,
        password: null,
        errors: {
            name: '',
            email: '',
            password: '',

        }
    };

    setSize = event => {
        this.setState({
            size: event.target.value
        });
    }

        setGlutenFree = event => {
            this.setState({
                glutenFree: event.target.checked
            });
        }

            setTopping = event => {
                this.setState({
                    topping: event.target.value
                });
            }

                setInstructions = event => {
                    this.setState({
                        instructions: event.target.value
                    });
    };

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } =event.target;
        let errors =  this.state.errors;

        switch (name) {
            case 'name':
                errors.name =
                value.length < 5
                ? 'Name must be at least 5 characters long'
                : '';

                case 'email' :
                    errors.email =
                    validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid'
                    break;

                    case 'password':
                        errors.password =
                        value.length < 8
                        ? 'Password must be at least 8 characters long'
                        : ''

                        break;
                        default:
                        break;
        }
            this.setState({errors, [name] : value}, () => {
                console.log(errors)
            })

    }

    handleSubmit = event => {
        event.preventDefault();

        const {
            size,
            glutenFree,
            topping,
            instructions
        } = this.setState;

        alert(`Your Dragon Pal Order Rquest Has Been Submitted! Order Details:Size: ${size}
        Super Believe? ${glutenFree ? 'yes' : 'no'}
        Color: ${topping || 'none'}
        Special instructions: ${instructions || 'none'}`)
    };

    render() {
        const {
            size,
            glutenFree,
            instructions,
            topping
        } = this.setState;


    return (
        <div className="wrapper">
            <div className="form-wrapper">
        <h1>Order Your Dragon Pal</h1>
        <form onSubmit={this.handleSubmit}>
            <div className="name">
                <label>Name</label>
                <input>
                type="text"
                name="name"
                onChange={this.handleChange}
                </input>

            </div>

            <div className="email">
                <label>Email</label>
                <input>
                type="text"
                name="email"
                onChange={this.handleChange}
                </input>
                
            </div>

            <div className="password">
                <label>Password</label>
                <input>
                type="text"
                name="password"
                onChange={this.handleChange}
                </input>
                
            </div>
        
            <label>
                <input> 
                    type="radio"
                    value="small"
                    checked={size === 'small'}
                    onChange={this.setSize}
                    </input>
                Small
            </label>

            <label>
                <input> 
                    type="radio"
                    value="medium"
                    checked={size === 'medium'}
                    onChange={this.setSize}
                    </input>
                Medium
            </label>

            <label>
                <input> 
                    type="radio"
                    value="large"
                    checked={size === 'large'}
                    onChange={this.setSize}
                    </input>
                Large
            </label>
                <br/>
                <br/>
                <div className="topping">
            <label>
                Dragon Pal Color
                <br/>
                <select onChange={this.setTopping} value={topping}>
                    <option value="">-Pick You Dragon Pal Color -</option>
                    <option value="">Standard </option>
                    <option value="">Red </option>
                    <option value="">Orange </option>
                    <option value="">Black</option>
                    <option value="">White</option>
                </select>
            </label>
            </div>
            <br/>
            <label>
                <input type="checkbox" checked={glutenFree}>
                    onChange={this.setGlutenFree} 
                    
                </input>
                Do you super believe in your Dragon Pal?
            </label>
            <br/>
            <br/>
            <div className="instructions">
            <label>
                Special Instructions:
                <br/>
                <textarea
                    value={instructions}
                    onChange={this.setInstructions}
                    />
                   
            </label>
            </div>

            <br/>
                    <br/>
                    <button type="submit">Submit Order Form</button>

        </form>

</div>
</div>

    );
    }
}

