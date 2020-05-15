import React from 'react';
// In React when using Route we cannot use 'a' tag, we need to use Link
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'Arial Helvetica sans-serif'
}

const linkStyle = {
    fontFamilyy: 'Arial Helvetica sans-serif',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#fff'
}

export default Header;