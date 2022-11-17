import React, { Component } from 'react';
function Navbar() {
    
    return ( <nav className='nav'>
        <a href='/' className='site-title'>Pizza</a>
        <ul>
            <li>
              <CustomLink href="/manager">Manager</CustomLink> 
            </li>
            <li>
              <CustomLink href='/customer'>Customer</CustomLink>
            </li>
            <li>
              <CustomLink href='/server'>Server</CustomLink>
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