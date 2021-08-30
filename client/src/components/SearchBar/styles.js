import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    searchBar: {
        padding: '1rem'
    },
    '& .MuiGrid-item': {
        [theme.breakpoints.down('sm', 'md')]: {
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
        }
    }
}));