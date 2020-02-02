import { makeStyles } from '@material-ui/core/styles';
import img from '../assets/images/Background.png';
import logo from '../assets/images/logo.png';
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
    width: '203px',
    height: '114px',
    background: `url(${logo}) no-repeat center`,
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
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
}));
