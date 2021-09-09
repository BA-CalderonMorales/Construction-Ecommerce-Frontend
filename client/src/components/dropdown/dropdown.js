import React, { useState } from 'react';
import { MenuItems } from '../menu-items/menu-items';
import Button from '../button/button';
import { Link } from 'react-router-dom';
import './dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@material-ui/core'

const Dropdown = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => setActive(!active);
    return (
        <>
            <ul onClick={handleClick} className={active ? 'dropdown-menu active' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => (
                    <>
                        <li key={index}>
                            <Link 
                            className={item.cName} 
                            to={item.path} 
                            onClick={setActive(false)}>
                                {item.title}
                            </Link>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}

export default Dropdown
