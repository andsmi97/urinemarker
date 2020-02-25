import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  item: {
    outline: 'none',
    userSelect: 'none',
    display: 'flex!important',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '141px',
  },
}));
