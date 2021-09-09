import { makeStyles } from "@material-ui/styles";

export default makeStyles ((theme) => ({
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
            padding: '2rem 1rem 1.25rem 1rem'
        },
        '& .MuiTextField-root': {
            margin: '3px',
            backgroundColor: '#f1f2f6'
        },
        backgroundColor: '#E6E8E6'
    }
}));