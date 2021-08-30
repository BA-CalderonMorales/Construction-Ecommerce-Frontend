import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    media: {
        borderRadius: '20px',
        objectFit: 'cover',
        width: '100%',
        maxHeight: '500px',
        minHeight: '200px'
    },
    card: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
        paddingBottom: '2rem',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    section: {
        borderRadius: '20px',
        margin: '1rem',
        flex: 1,
    },
    imageSection: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginLeft: 0,
        },
    },
    recommendedSection: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },
    loadingPaper: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '20px', 
        height: '39vh',
    },
    ul: {
        justifyContent: 'space-around',
    },
}));