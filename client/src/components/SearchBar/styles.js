import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    searchBar: {
        padding: '1rem'
    },
    textField: {
        margin: '.5rem .5rem .5rem .75rem'
    },
    '& .MuiGrid-item': {
        [theme.breakpoints.down('sm', 'md')]: {
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
        }
    },
    '& .MuiFormLabel': {
        letterSpacing: '0.09938rem'
    },
}));