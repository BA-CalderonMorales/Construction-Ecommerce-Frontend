import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '1rem 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0.5rem',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
      backgroundColor: "#826754",
    },
    auth: {
      textAlign: 'center'
    },
    avatar: {
      marginRight: '1rem'
    },
    heading: {
      color: '#0e0306',
      fontSize: 'x-large',
      fontWeight: 400
    },
    image: {
      marginLeft: '0.25rem',
      marginTop: '.25rem',
      marginBottom: '1rem'
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '30rem',
      color: '#0e0306',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        width: 'auto',
        paddingRight: '1rem'
      },
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        flexWrap: 'wrap',
        justifyContent: 'center'
      },
    },
    profile: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '20rem',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        marginTop: 20,
        justifyContent: 'center',
      },
    },
    brandContainer: {
      padding: '.5rem .5rem',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: '#0e0306'
    },
    userName: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
    button: {
      color: '#0e0306',
      fontSize: '1.25rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem'
      },
    }
}));