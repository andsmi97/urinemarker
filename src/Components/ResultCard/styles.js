import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
    margin: 8,
    minHeight: 75,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    fontSize: 16,
  },
}));
