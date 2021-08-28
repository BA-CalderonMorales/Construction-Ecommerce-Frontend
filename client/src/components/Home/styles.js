import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    searchTerm: {
        borderRadius: 10,
        marginBottom: '1rem',
        display: 'flex',
        padding: '1rem',
    },
    pagination: {
        borderRadius: 4,
        marginBottom: '1rem',
        padding: '16px',
    },
    gridContainer: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
}));