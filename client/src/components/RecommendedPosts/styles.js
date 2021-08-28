import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    section: {
        borderRadius: '20px',
        margin: '10px',
        flex: 1,
    },
    recommendedPosts: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
        height: 'auto',
        width: 'auto',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    root: {
        maxWidth: 345,
        spacing: '1rem'
    },
    media: {
        height: 140,
    },
    recommendedImage: {
        width: '100%',
        height: '100%'
    }
}));