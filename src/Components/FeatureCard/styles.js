import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 400,
    boxShadow: '0 15px 30px rgba(0,0,0,0.16)',
    padding: 16,
    borderRadius: 20,
    transition: 'all .7s ease',
    '&:hover': {
      boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
    },
  },
  title: {
    textAlign: 'center',
  },
  image: { margin: 16 },
  description: {
    textAlign: 'center',
  },
}));
