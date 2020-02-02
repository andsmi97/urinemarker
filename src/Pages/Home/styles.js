import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  background: {
    height: '100vh',
    width: '100vw',
    background: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflowY: 'scroll',
    paddingBottom: 100,
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  image: {
    width: '80%',
  },
  title: {
    textAlign: 'center',
  },
}));
