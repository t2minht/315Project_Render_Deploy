import React, { Component } from 'react';
function Navbar() {
    
    return ( <nav className='nav'>
        <ul>
            <li>
              <CustomLink href='/customer'>Customer</CustomLink>
            </li>
        </ul>
    </nav> );
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname;
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props} >{children}</a> 
        </li>
    )
}

export default Navbar;