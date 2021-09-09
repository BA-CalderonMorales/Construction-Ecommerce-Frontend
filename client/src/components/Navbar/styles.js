import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '.& MuiToolbar': {
      padding: '0'
    },
    '.& MuiContainer-root': {
      backgroundColor: '#D57A66'
    }
  },
  navSection: {
    backgroundColor: "#D57A66", 
  },
  navBar: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#D57A66',
    [theme.breakpoints.down('xs','sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  brandContainer: {
    display: 'flex',
    flex: '1',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignContent: 'center',
    padding: '3rem',
    textDecoration: 'none',
    color: 'whitesmoke',
    backgroundColor: '#D57A66',
    [theme.breakpoints.down('xs', 'sm')]: {
      flexDirection: 'column',
      paddingBottom: '1rem',
      paddingTop: '.5rem'
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
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: '.5rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0'
    }
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  toolbar: {
    display: 'flex',
    flex: '2',
    justifyContent: 'flex-end',
    backgroundColor: '#D57A66',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      width: 'auto',
      padding: '.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      fontSize: '14px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px'
    },
  },
  auth: {
    textAlign: 'center'
  },
  avatar: {
    marginRight: '.5rem',
    width: '25px',
    height: '25px',
    color: 'whitesmoke',
    [theme.breakpoints.down('sm', 'md')]: {
      marginLeft: '10rem',
    },
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      top: '10px',
      left: '0',
      fontSize: '20px',
      height: '20px',
      width: '20px'
    }
  },
  avatarOwner: {
    marginRight: '.5rem',
    width: 'auto',
    color: 'whitesmoke',
    [theme.breakpoints.down('md')]: {
      marginLeft: '10rem'
    },
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '10px',
      left: '0',
      fontSize: '15px',
      height: '20px',
      width: '10rem'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  button: {
    color: 'whitesmoke'
  }
}));