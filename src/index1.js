import React from 'react';
import ReactDOM from 'react-dom';

import ContactForm from './ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3">
          
          <ContactForm />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));