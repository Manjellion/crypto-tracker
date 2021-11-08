import React from 'react'
import { Link } from 'react-router-dom'

export const NavLink = (props) => {
    return (
        <ul>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/Home">HOME</Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/currencies">CURRENCIES</Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/cryptocurrencies">CRYPTOCURRENCIES</Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/account">ACCOUNT</Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/news">NEWS</Link>
            </li>
        </ul>
    )
}

export default NavLink;
