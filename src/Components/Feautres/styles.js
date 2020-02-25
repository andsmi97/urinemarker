import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    textTransform: 'Uppercase',
    fontFamily: 'Monsterrat, Roboto, Helvetica',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
