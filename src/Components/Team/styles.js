import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    textTransform: 'Uppercase',
    fontFamily: 'Monsterrat, Roboto, Helvetica',
    margin: 0,
  },
  teamWrapper: {
    // backgroundColor: '#9BE7FF',
    paddingTop: 64,
    paddingBottom: 64,

    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
