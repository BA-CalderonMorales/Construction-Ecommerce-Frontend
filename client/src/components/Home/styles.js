import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    root: {
        '& .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12': {
            textAlign: 'center'
        }
    },
    searchBar: {
        margin: '2rem',
    },
    gridContainer: {
        marginTop: '5rem',
        marginBottom: '1rem',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
}));