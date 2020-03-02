import { makeStyles } from '@material-ui/core/styles';
import leftImage from '../../assets/images/LeftImage.svg';
export const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    textTransform: 'Uppercase',
    fontFamily: 'Monsterrat, Roboto, Helvetica',
    margin: 0,
  },
  root: {
    width: '100%',
    fontFamily: 'Monsterrat, Roboto, Helvetica',
    position: 'relative',
  },
  lineVertical: {
    minHeight: 0,
  },
  vertical: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    justifyContent: 'flex-start',
  },
  stepperRoot: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  paper: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  step: {
    fontSize: '2rem',
  },
  leftImage: {
    position: 'absolute',
    background: `url(${leftImage}) no-repeat`,
    top: 0,
    left: 0,
    width: '100%',
    height: 2000,
    zIndex: -1,
  },
}));
