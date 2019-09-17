import React from "react";
import ArrowBack from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ResultCard from "../Components/ResultCard";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    background: theme.palette.primary.light,
    height: "100vh",
    width: "100vw",
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  returnButton:{
    position: "absolute",
    top: 0,
    left: 0,
  }
}));

const Result = props => {
  const classes = useStyles();
  return (
    <>
      <IconButton aria-label="Назад" component={Link} to={"/"} className={classes.returnButton}>
          <ArrowBack />
        </IconButton>
    <div className={classes.wrapper}>
      <div className={classes.header}>
        
        <h3 className={classes.description}>{props.description}</h3>
      </div>
      {props.results.map((result, index) => (
        <ResultCard
          shortName={result.shortName}
          fullName={result.fullName}
          value={result.value}
          metric={result.metric}
          key={index}
        />
      ))}
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to={"/home"}
      >
        Отправить врачу
      </Button>
    </div>
    </>
  );
};

export default Result;
