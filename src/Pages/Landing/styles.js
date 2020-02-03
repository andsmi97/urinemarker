import { makeStyles } from '@material-ui/core/styles';
import img from '../../assets/images/Background.png';
import logo from '../../assets/images/logo.png';
export const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: 240,
  },
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  background: {
    height: '100vh',
    width: '100vw',
    background: `url('${img}') no-repeat right`,
  },
  logo: {
    width: '200px',
    height: '100px',
    background: `url(${logo}) no-repeat center`,
    backgroundSize: 'contain',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 16,
    marginRight: 100,
    marginLeft: 100,
  },
  phoneNumber: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'Bold',
    fontFamily: 'Monsterrat',
  },
  leftPart: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeaderText: {
    fontFamily: 'Monsterrat',
    fontSize: 34,
    textAlign: 'center',
  },
  purchaseButton: {
    width: '100px',
    color: 'white',
  },
  rightImage: {
    width: '80%',
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  gridContainer: {
    height: 'calc(100% - 116px)',
  },
  '@media screen and (max-width: 600px)': {
    logo: {
      width: '150px',
      height: '75px',
      background: `url(${logo}) no-repeat center`,
      backgroundSize: 'contain',
    },
    imageWrapper: {
      paddingTop: 16,
    },
    rightImage: {
      width: '45%',
    },
    topBar: {
      paddingTop: 16,
      marginRight: 30,
      marginLeft: 30,
    },
    phoneNumber: {
      fontSize: 16,
    },
    mainHeaderText: {
      padding: 16,
      fontSize: 24,
    },
  },
  '@media screen and (max-width: 357px)': {
    logo: {
      width: '100px',
      height: '50px',
      background: `url(${logo}) no-repeat center`,
      backgroundSize: 'contain',
    },
    topBar: {
      paddingTop: 16,
      marginRight: 24,
      marginLeft: 24,
    },
    phoneNumber: {
      fontSize: 14,
    },
    mainHeaderText: {
      fontSize: 20,
    },
    rightImage: {
      marginTop: 16,
      width: '50%',
    },
  },
}));
