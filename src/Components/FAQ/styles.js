import { makeStyles } from '@material-ui/core/styles';
export const useContentStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '66.666%',
    flexShrink: 0,
  },
  expansionPanel: {
    marginBottom: 16,
    borderRadius: '20px!important',
    '&:before': {
      height: 0,
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  list: {
    '>li': {
      listStyle: 'disc',
    },
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));
export const useComponentStyles = makeStyles(theme => ({
  background: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    textTransform: 'Uppercase',
    fontFamily: 'Monsterrat, Roboto, Helvetica',
  },
}));
