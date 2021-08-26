import React from 'react';
import { Container, Grid, Typography, BottomNavigation } from '@material-ui/core';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (  
        <Footer className={classes.footer}>
            <Container variant="contained">
                <Grid item xs={12} sm={12}>
                    <Typography variant="body3" align="center">                
                        Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                    </Typography>
                </Grid>
            </Container>
        </Footer>
    );
}
 
export default Footer;