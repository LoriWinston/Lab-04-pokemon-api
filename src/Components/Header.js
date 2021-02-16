  
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header-css">
                <NavLink exact activeClassName="selected" to="/" className="header-css">
                Home
                </NavLink>
                <NavLink exact activeClassName="selected" to="/search" className="header-css">
                Search
                </NavLink>
            
            </div>
        )
    }
}