import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root': {
            width: '100%',
            margin: '3px'
        },
        '& .MuiContainer-root': {
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
        },
        '& .MuiGrid-root': {
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
            padding: '0.5rem'
        },
        '& .MuiTextField-root': {
        backgroundColor: '#f1f2f6'
        },
        backgroundColor: '#E6E8E6'
    },
    anonUser: {
        padding: theme.spacing(2 ),
    },
    fileInput: {
        width: '100%'
    },
    chooseFile: {
        width: '25%',
        alignItems: 'start',
        [theme.breakpoints.down('md', 'sm')]: {
            width: '100%'
        }
    },
    buttonSubmit: {
        width: '100%',
        [theme.breakpoints.down('md', 'sm')]: {
            width: '100%'
        }
    }, 
    buttonClear: {
        width: '100%',
        [theme.breakpoints.down('md', 'sm')]: {
            width: '100%'
        }
    }
}));