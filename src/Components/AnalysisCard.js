import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
    margin: 8,
    textDecoration: "none"
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  }
}));

const AnalysisCard = props => {
  const classes = useStyles();
  const date = new Date(props.date);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dayTitle = `${day > 9 ? day : `0${day}`}/${
    month > 9 ? month : `0${month}`
  }/${year}`;
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const timeTitle = `${hours > 9 ? hours : `0${hours}`}:${
    minutes > 9 ? minutes : `0${minutes}`
  }`;

  return (
    <Card className={classes.card} component={Link} to={`/result/${props.id}`}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="photo"
            className={classes.avatar}
            src={
              "https://sun9-27.userapi.com/c851324/v851324578/1bf53b/SGMgouRUYqY.jpg"
            }
          />
        }
        title={dayTitle}
        subheader={timeTitle}
      />
    </Card>
  );
};

export default AnalysisCard;
