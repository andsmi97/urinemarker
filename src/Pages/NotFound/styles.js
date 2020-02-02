import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  background: {
    height: '100vh',
    width: '100vw',
    background: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 60,
    paddingTop: 60,
  },
  image: {
    width: '80%',
  },
  title: {
    textAlign: 'center',
    fontSize: 42,
  },
}));
