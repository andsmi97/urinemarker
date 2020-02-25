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
  fieldsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: '#9BE7FF',
    padding: 34,
  },
  button: {
    color: theme.palette.primary.main,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingLeft: 40,
    paddingRight: 40,
    '&:hover': {
      backgroundColor: '#f3f3f3',
    },
  },
}));
