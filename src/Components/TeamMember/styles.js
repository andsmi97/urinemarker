import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
    position: 'relative',
    '&:hover >  .imageWrapper': {
      // imageWrapper: {
      opacity: 0.8,
      // },
    },
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
  icon: {
    fontSize: 30,
    margin: 8,
    color: 'black',
    '&:hover': {
      color: theme.palette.primary.dark,
      cursor: 'pointer',
    },
  },
}));
