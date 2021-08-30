import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    root: {
        padding: '0',
        margin: '0',
        fontFamily: "'DM Sans', sans-serif",
        '& .MuiContainer-root': {
            paddingLeft: 0,
            paddingRight: 0
        },
        '& .MuiAppBar-root': {
            padding: 1
        },
        
    },
    mainContainer: {
        minWidth: "380px"
    },
    [theme.breakpoints.down('sm')]: { // sm, xs, md, lg, xl for mobile queries.
        // material ui has specific info in their documentation on this.
        mainContainer: {
            direction: 'column-reverse'
        }
    }
}));

