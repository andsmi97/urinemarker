import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  }
}));

const AnalysisCard = props => {
  const classes = useStyles();
  const day = `${props.date.getDate()}/${props.date.getMonth() +
    1}/${props.date.getFullYear()}`;
  const time = `${props.date.getHours()}:${props.date.getMinutes()}`;
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="photo"
            className={classes.avatar}
            src={props.img}
          />
        }
        title={day}
        subheader={time}
      />
    </Card>
  );
};

export default AnalysisCard;
