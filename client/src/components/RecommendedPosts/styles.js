import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    section: {
        borderRadius: '3rem',
        margin: '1rem',
        flex: 1,
        display: 'flex',
        [theme.breakpoints.down('xs', 'sm', 'md')]: {
            justifyContent: 'center'
        }
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