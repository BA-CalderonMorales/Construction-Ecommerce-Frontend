import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    mainContainer: {
        borderRadius: 15,
        padding: '1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
    },
    image: {
        marginLeft: '15px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    [theme.breakpoints.down('sm')]: {
        heading: {
            display: 'none',
        },
        userName: {
            display: 'none',
        },
        image: {
            marginLeft: '5px',
        },
        toolbar: {
            display: 'flex',
            justifyContent: 'flex-end',
            width: '160px',
        },
    },
    actionDiv: {
        textAlign: 'center',
    },
}));