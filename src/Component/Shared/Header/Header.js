import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'





const Header = () => {
    const { users, logOut } = useAuth()
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" className='nav-background' variant="dark">
            <Container>
                <NavLink className='company-name nav-links' to="/" >
                    <span>Travelo</span>
                </NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <NavLink className='nav-links' to="/home">Home</NavLink>
                    {users.email ? <NavLink className='nav-links' to="/myOrders">My Orders</NavLink> : ''}




                    {users.email ? <NavLink className='nav-links' to="/manageService">Manage All Orders</NavLink> : ''}

                    {users.email ? <NavLink className='nav-links' to="/addService">Add a Service</NavLink> : ''}


                    {users.email ? <span className='nav-name' style={{ color: 'white' }}><img className='nav-img' src={users.photoURL} alt="" /> {users.displayName}</span> : ''}
                    {users.email ?

                        <Button onClick={logOut} variant="outline-dark" className='logout-btn'>Log Out</Button>


                        : <NavLink className='nav-links' to="/login"><Button variant="outline-dark">Login</Button></NavLink>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;