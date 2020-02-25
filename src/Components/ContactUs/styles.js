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
  textFieldsWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputField: {
    margin: theme.spacing(2),
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 64,
  },
  button: {
    color: 'white',
    borderRadius: 50,
    paddingLeft: 40,
    paddingRight: 40,
  },
}));
