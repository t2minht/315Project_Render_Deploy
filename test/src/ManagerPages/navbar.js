import React, { Component } from 'react';
function Navbar() {
    
    return ( <nav className='nav'>
        <a href="/" className='site-title'>Log Out</a>
        <ul>
            <li>
              <CustomLink href="/manager">Manager Home</CustomLink> 
            </li>
            <li>
              <CustomLink href="/trends">Trends</CustomLink> 
            </li>
            <li>
              <CustomLink href='/inventory'>Inventory</CustomLink>
            </li>
            <li>
              <CustomLink href='/menu'>Menu</CustomLink>
            </li>
            <li>
              <CustomLink href='/restock'>Restock</CustomLink>
            </li>
            <li>
              <CustomLink href='/restockReport'>Restock Report</CustomLink>
            </li>
            <li>
              <CustomLink href='/excessReport'>Excess Report</CustomLink>
            </li>
            <li>
              <CustomLink href='/salesTogether'>Sales Together</CustomLink>
            </li>
        </ul>
    </nav> );
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname;
    console.log(path);
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props} >{children}</a> 
        </li>
    )
}

export default Navbar;