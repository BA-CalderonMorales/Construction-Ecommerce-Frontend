import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    [theme.breakpoints.down('sm')]: { // sm, xs, md, lg, xl for mobile queries.
        // material ui has specific info in their documentation on this.
        mainContainer: {
            direction: 'column-reverse'
        }
    }
}));