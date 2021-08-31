import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  navSection: {
    backgroundColor: "#826754",
  },
  navBar: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#826754',
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
    backgroundColor: '#826754',
    [theme.breakpoints.down('xs', 'sm')]: {
      flexDirection: 'column',
      paddingBottom: '1rem',
      paddingTop: '1rem'
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
    backgroundColor: '#826754',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      width: 'auto',
      padding: '.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
  },
  auth: {
    textAlign: 'center'
  },
  avatar: {
    marginRight: '1rem'
  },
  button: {
    color: 'whitesmoke'
  }
}));