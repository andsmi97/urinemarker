import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
    margin: 16,
    minHeight: 75
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  }
}));

const ResultCard = props => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar aria-label="short-name" className={classes.avatar}>
              {props.shortName}
            </Avatar>
          }
          title={props.fullName}
          subheader={`${props.value} ${props.metric}`}
        />
      </Card>
      {/* Component Difference*/}
      {/* Component Status*/}
    </>
  );
};

export default ResultCard;
