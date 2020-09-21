import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import './App.css';






export const FooterBar = () => (

  <div className="footer">
    
    <Navbar expand="lg">
      
      
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/Order">Order</Nav.Link></Nav.Item>
         <i className="fas fa-dragon"></i>
        </Nav>
        
        
      </Navbar.Collapse>
      
    </Navbar>

    
  </div>
)