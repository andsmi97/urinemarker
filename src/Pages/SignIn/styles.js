import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  background: {
    backgroundColor: theme.palette.primary.light,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
