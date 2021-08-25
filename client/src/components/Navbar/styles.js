import { makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
      margin: "0rem 0rem 1rem 0rem",
      display: "flex",
      padding: "1rem 1rem 1rem 2rem",
      alignItems: "center",
      borderRadius: "0rem 2rem 0rem 2rem",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#2C3A47",
      minWidth: "348px"
    },
    auth: {
      textAlign: 'center'
    },
    heading: {
      color: 'whitesmoke',
      textDecoration: 'none',
    },
    image: {
        position: 'relative',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      color: 'whitesmoke',
      width: '400px',
    },
    [theme.breakpoints.down('sm')]: { // sm, xs, md, lg, xl for mobile queries.
      // material ui has specific info in their documentation on this.
      toolbar: {
          width: '150px'
      }
    },
    profile: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '400px',
    },
    userName: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '1rem',
      paddingRight: '1rem'
    },
    brandContainer: {
      display: 'flex',
      alignItems: 'center',
    }
}));