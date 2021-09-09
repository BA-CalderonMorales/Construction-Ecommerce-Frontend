import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '55%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '5px',
        position: 'relative',
        backgroundColor: '#FFFFFC',
        '&:hover': {
            height: '100%'
        },
        [theme.breakpoints.down('lg')]: {
            transition: 'all linear .5s',
            height: '15rem'  
        },
        [theme.breakpoints.down('md')]: {
            transition: 'all linear .25s',
            height: '25rem'  
        },
        [theme.breakpoints.down('sm')]: {
            transition: 'all linear .05s',
            height: '34rem'  
        },
        [theme.breakpoints.down('xs')]: {
            height: '100%'  
        }

    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px',
    },
    title: {    
        padding: '0 16px',
    },
    cardActions: {
        padding: '0 10px 8px 10px',
        display: 'flex',
        justifyContent: 'center',
    },
    cardAction: {
        display: 'block',
        textAlign: 'center',
    },
}));