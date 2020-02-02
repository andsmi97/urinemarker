import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
    margin: 8,
    textDecoration: 'none',
    minHeight: 70,
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
