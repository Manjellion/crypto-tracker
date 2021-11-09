import React, { useState }from 'react'
import NavLink from './NavLink'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

const MobileNav = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <FiMenu className="Hamburger" size='40px' color='white'
    onClick={() => setOpen(!open)} />

    const closedIcon = <AiOutlineClose className="Hamburger" size='40px' color='white'
    onClick={() => setOpen(!open)} />

    const closeMobileMenu = () => setOpen(false);

    return (
        <nav className="Mobile-nav">
            {open ? closedIcon : hamburgerIcon}
            {open && <NavLink isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>   
    )
}

export default MobileNav
