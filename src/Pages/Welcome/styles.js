import { makeStyles } from '@material-ui/core/styles';
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
    background: theme.palette.primary.light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
