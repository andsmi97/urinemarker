import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  background: {
    background: theme.palette.primary.light,
    height: '100vh',
    width: '100vw',
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 16,
  },
  returnButton: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));
