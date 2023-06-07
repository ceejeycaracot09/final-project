import React from 'react';

const navStyles = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
};

const linkStyles = {
  color: '#fff',
  textDecoration: 'none',
};

const hoverStyles = {
  color: '#f1f1f1',
};

const Navbar = () => {
  return (
    <nav style={navStyles}>
      
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        margin: '0', 
        padding: '0', 
        width: '100%', 
        textAlign: 'right', 
        fontSize: '24px',
        fontStyle: 'bold' }}>
        
        <li>
          <img href="/" src="https://singlemothers.us/wp-content/uploads/2020/12/Single-Mothers-Logo.png" alt="placeholder"
      style={{height: '50px', width: '200px'}} />
      {/* <a href="/" style={{ ...linkStyles, fontWeight: 'bold', fontSize: '24px' }}>
        Logo
      </a> */}
        </li>
        
        <li style={{ marginRight: '20px', width: '25%' }}>
          <a href="/home" style={linkStyles}>
            Home
          </a>
        </li>
        <li style={{ marginRight: '20px', width: '25%' }}>
          <a href="/about" style={linkStyles}>
            About
          </a>
        </li>
        <li style={{ marginRight: '20px', width: '25%' }}>
          <a href="/services" style={linkStyles}>
            Services
          </a>
        </li>
        <li style={{ marginRight: '20px', width: '25%'  }}>
          <a href="/contact" style={linkStyles}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;