import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      paddingTop: [7, null, 8],
      paddingBottom: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'row',
    },
    menus: {
      marginTop: [3, 4],
      marginBottom: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },
    button: {
      transparent: true,
      backgroundColor: 'transparent',
    },
    aLink: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      marginBottom: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      margin: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
}));