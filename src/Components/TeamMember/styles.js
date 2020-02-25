import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
  title: {
    textAlign: 'center',
    margin: 0,
  },
  image: {
    borderRadius: 50,
    height: 200,
    width: 200,
    marginBottom: 16,
  },
  description: {
    textAlign: 'center',
    margin: 0,
  },
}));
