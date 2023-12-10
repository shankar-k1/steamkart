import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Phone, Database } from 'phosphor-react';
import "./navbar.css";

export const Navbar = () => {
    return (
    <div className="navbar">
        <div className="links">
            <Link to="/">Shop  </Link>
            <Link to="/cart"> 
            <ShoppingCart size={32}/>
            </Link>
            <br/>
            <Link to="/contact">
            <Phone size={32}/>
            </Link>

            <Link to="/detail">
            <Database size={32}/>
            </Link>
        </div>
    </div>
    );
};

export default Navbar;