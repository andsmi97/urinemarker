import React from 'react';
import { ReactComponent as Image } from '../../assets/images/NotFound.svg';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';

const NotFound = ({ onRedirect }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.background}>
        <h3 className={classes.title}>Упс, страница не найдена</h3>
        <Image className={classes.image} />
        <Button variant="contained" color="primary" onClick={onRedirect}>
          Вернуться на главную
        </Button>
      </div>
    </>
  );
};

export default NotFound;
