import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { getDayTitle, getTimeTitle } from '../functools';
const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
    margin: 8,
    textDecoration: 'none',
    minHeight: 70,
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const AnalysisCard = ({
  date,
  id,
  image = 'https://sun9-27.userapi.com/c851324/v851324578/1bf53b/SGMgouRUYqY.jpg',
}) => {
  const classes = useStyles();
  const cardDate = new Date(date);
  const timeTitle = getTimeTitle(cardDate);
  const dayTitle = getDayTitle(cardDate);
  return (
    <Card className={classes.card} component={Link} to={`/result/${id}`}>
      <CardHeader
        avatar={
          <Avatar aria-label="photo" className={classes.avatar} src={image} />
        }
        title={dayTitle}
        subheader={timeTitle}
      />
    </Card>
  );
};

export default AnalysisCard;
