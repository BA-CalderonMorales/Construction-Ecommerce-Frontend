import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    root: {
        '& .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12': {
            textAlign: 'center'
        }
    },
    gridContainer: {
        marginTop: '5rem',
        marginBottom: '1rem',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
}));