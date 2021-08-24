import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    appBar: {
        borderRadius: '0.5rem',
        margin: '2rem 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C3A47',
        padding: '1.5rem;'
    },
    heading: {
        color: 'whitesmoke',
    },
    image: {
        marginLeft: '2rem',
    },
    [theme.breakpoints.down('sm')]: { // sm, xs, md, lg, xl for mobile queries.
        // material ui has specific info in their documentation on this.
        mainContainer: {
            direction: 'column-reverse'
        }
    },
    footer: {
        borderRadius: 50,
        alignItems: 'center',
        marginTop: '2rem',
        backgroundColor: 'transparent'
    }
}));

