/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, Box, Container, Image, Text, Button } from 'theme-ui';
import { Link } from '../link/link';
import useStyles from './styles';
import data from './webapp-footer-data'

const Footer = () => {
    const classes = useStyles();

    return (
        <footer>
            <Container sx={classes.footer}>
                <Box sx={classes.BottomArea}>
                <Box sx={classes.menus}>
                    <nav>
                    <p>Mares Construction LLC</p>
                    <br/>
                    {data.menuItem.map((item, i) => (
                        <>
                            <Link 
                            path={item.path}
                            key={i}
                            label={item.label}
                            className={classes.aLink}
                            />
                            &nbsp;&nbsp;
                        </>
                    ))}
                    </nav>
                    <br/>
                </Box>
                <Text sx={classes.copyright}>
                    &copy; by {new Date().getFullYear()} Brandon Calderon
                </Text>
                </Box>
            </Container>
        </footer>
    );
}

export default Footer;