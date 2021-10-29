import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Logo/favicon.ico'
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='nav-background' variant="dark">
            <Container>
                <NavLink className='company-name nav-links' to="/" >
                    <img className='logo' src={logo} alt="" />
                    <span>Travelo</span>
                </NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <NavLink className='nav-links' to="/home">Home</NavLink>
                    <Link to='/login'>
                        <Button variant="outline-dark" className='login-btn'>Login</Button></Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;