import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
const [menuOpen,setMenuOpen]=useState(false);
const location=useLocation();

const toggleMenu=()=>setMenuOpen(!menuOpen);
const closeMenu=()=>setMenuOpen(false);

return (
<header className="header">
<div className="container">
<nav className="navbar">

<div className="nav-left">
<Link to="/" className="logo-text" onClick={closeMenu}>
Inalgo
</Link>
</div>

<div className={`nav-pill-wrapper ${menuOpen ? 'active' : ''}`}>
<ul className="nav-menu">

<li>
<Link
to="/"
className={`nav-link ${location.pathname==='/' ? 'active-link':''}`}
onClick={closeMenu}
>
Home
</Link>
</li>

<li>
<Link
to="/services"
className={`nav-link ${location.pathname==='/services' ? 'active-link':''}`}
onClick={closeMenu}
>
Services
</Link>
</li>

<li>
<Link
to="/about"
className={`nav-link ${location.pathname==='/about' ? 'active-link':''}`}
onClick={closeMenu}
>
About
</Link>
</li>

<li>
<Link
to="/blog"
className={`nav-link ${location.pathname==='/blog' ? 'active-link':''}`}
onClick={closeMenu}
>
Blog
</Link>
</li>

<li>
<Link
to="/contact"
className={`nav-link ${location.pathname==='/contact' ? 'active-link':''}`}
onClick={closeMenu}
>
Contact
</Link>
</li>

</ul>
</div>

<div className="nav-right-section">
<Link to="/join" className="nav-contact-btn">
JOIN US →
</Link>

<button
className={`hamburger ${menuOpen ? 'is-active':''}`}
onClick={toggleMenu}
>
<span></span>
<span></span>
<span></span>
</button>

</div>
</nav>
</div>
</header>
);
}

export default Header;