import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  main: {
    // flexWrap: 'nowrap',
    // padding: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // overflowX: 'auto',
    // WebkitOverflowScrolling: 'touch',
    // width: '100%',
  },
  item: {
    // minWidth: '300px',
    display: 'flex!important',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '141px',
  },
}));
