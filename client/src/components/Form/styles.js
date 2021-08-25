import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        backgroundColor: '#f1f2f6'
        },
    },
    paper: {
        padding: theme.spacing(0.5),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '95%',
        margin: '6px 0',
        
    },
    buttonSubmit: {
        marginBottom: 10,
        marginTop: 5
    }
}));