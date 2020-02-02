import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  purchaseButton: {
    width: '100px',
    color: 'white',
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  textFieldWrapper: {
    display: 'flex',
  },
  phoneFieldWrapper: {
    color: 'rgba(0, 0, 0, 0.87)',
    cursor: 'text',
    fontSize: '1rem',
    boxSizing: 'border-box',
    alignItems: 'center',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    lineHeight: '1.1875em',
    display: 'flex',
    position: 'relative',
    transition: 'background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
  },
  phoneField: {
    font: 'inherit',
    color: 'currentColor',
    width: '100%',
    border: '0',
    height: '1.1875em',
    margin: '0',
    display: 'block',
    minWidth: '0',
    background: 'none',
    boxSizing: 'content-box',
    animationName: 'MuiInputBase-keyframes-auto-fill-cancel',
    padding: '27px 12px 10px',
  },
}));
