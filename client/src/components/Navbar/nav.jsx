import React, { useState } from 'react';
import Login from '../button/button';
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from '../dropdown/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Toolbar, ButtonGroup, Button, Avatar, Typography } from '@material-ui/core'

const Nav = ({ user, classes, logout }) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    const closeMobileMenu = () => {
        setActive(false);
    }

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">Mares Construction</Link>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={active ? 'times' : 'bars'}/>
                </div>
                <>
                    {user ? 
                        <>
                            {user?.result?.name ? 
                                <>
                                    {user?.result?.name?.charAt(0) && user?.result?.imageUrl ? 
                                        <>
                                            <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                                            {/* <Typography className={classes.userName} variant="h6">{user.result.name}</Typography> */}
                                        </>
                                        :
                                        <>
                                            <Avatar className={classes.avatar} alt={user.result.name}>{user.result.name?.charAt(0)}</Avatar>
                                            {/* <Typography className={classes.userName} variant="h6">{user.result.name}</Typography> */}
                                        </>
                                    }
                                    <ButtonGroup variant="text" aria-label="text button group">
                                        <ul className={active ? 'nav-menu active' : 'nav-menu'}>
                                            <li className="nav-item">
                                                <Link to="/posts" className="nav-links" onClick={closeMobileMenu}>
                                                    <Button className={classes.button}>
                                                        Home
                                                    </Button>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
                                                    <Button className={classes.button}>    
                                                            Contact Us
                                                    </Button>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/contract" className="nav-links" onClick={closeMobileMenu}>
                                                    <Button className={classes.button}>
                                                        Contract Us
                                                    </Button>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/posts" className="nav-links" onClick={closeMobileMenu, logout}>
                                                    <Button variant="outline" className={classes.button}>
                                                        Logout
                                                    </Button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </ButtonGroup>
                                </>
                                :
                                <>
                                    <>
                                        <Typography className={classes.avatarOwner} alt={user.firstName}>Hello, {user.firstName}</Typography>
                                        {/* <Typography className={classes.userName} variant="h6">{user.name}</Typography> */}
                                    </>
                                    <ButtonGroup variant="text" aria-label="text button group">
                                        <ul className={active ? 'nav-menu active' : 'nav-menu'}>
                                            <li className="nav-item">
                                                <Link to="/posts" className="nav-links" onClick={closeMobileMenu}>
                                                    <Button className={classes.button}>
                                                        Home
                                                    </Button>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/view-users" className="nav-links" onClick={closeMobileMenu}>
                                                    <Button className={classes.button}>
                                                        Users
                                                    </Button>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/view-contracts" className="nav-links" onClick={closeMobileMenu}>
                                                    <Button className={classes.button}>
                                                        Contracts
                                                    </Button>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/auth" className="nav-links" onClick={closeMobileMenu, logout}>
                                                    <Button className={classes.button}>
                                                        Logout
                                                    </Button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </ButtonGroup>
                                </>
                            }
                        </> 
                        : 
                        <>
                            <ButtonGroup variant="text" aria-label="text button group">
                                <ul className={active ? 'nav-menu active' : 'nav-menu'}>
                                    <li className="nav-item">
                                        <Link to="/posts" className="nav-links" onClick={closeMobileMenu}>
                                            <Button className={classes.button}>
                                                Home
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
                                            <Button className={classes.button}>
                                                Contact Us
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contract" className="nav-links" onClick={closeMobileMenu}>
                                            <Button className={classes.button}>
                                                Contract Us
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin-landing" className="nav-links" onClick={closeMobileMenu}>
                                            <Button className={classes.button}>
                                                Administration
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/auth" className="nav-links" onClick={closeMobileMenu}>
                                            <Button className={classes.button}>
                                                login
                                            </Button>
                                        </Link>
                                    </li>
                                </ul>
                            </ButtonGroup>
                        </>
                    }
                </>
            </nav>
        </>
    )
}

export default Nav
