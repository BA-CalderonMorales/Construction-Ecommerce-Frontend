import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    root: {
        '& .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12': {
            textAlign: 'center'
        }
    },
    gridContainer: {
        paddingTop: '5rem',
        paddingBottom: '10rem',
        alignContent: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
}));