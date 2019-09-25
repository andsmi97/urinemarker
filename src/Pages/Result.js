import React, { useState, useEffect } from "react";
import ArrowBack from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ResultCard from "../Components/ResultCard";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { signInWithGoogle } from "../firebase/utils";
import { createSubstancesArray } from "../substances.js";
import agent from "../agent";
const useStyles = makeStyles(theme => ({
  background: {
    background: theme.palette.primary.light,
    height: "100vh",
    width: "100vw",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 16
  },
  returnButton: {
    position: "absolute",
    top: 0,
    left: 0
  }
}));

const Result = props => {
  const classes = useStyles();
  const [resultDate, setResultDate] = useState(new Date());
  const [results, setResults] = useState([]);
  console.log(results);
  const day = resultDate.getDate();
  const month = resultDate.getMonth() + 1;
  const year = resultDate.getFullYear();

  const date = `${day > 9 ? day : `0${day}`}/${
    month > 9 ? month : `0${month}`
  }/${year}`;

  useEffect(() => {
    (async () => {
      const result = await agent.Analyzes.one(props.id);
      setResults(createSubstancesArray(result));
      setResultDate(new Date(result.createdAt));
    })();
    return () => {};
  }, []);
  return (
    <>
      <IconButton
        aria-label="Назад"
        component={Link}
        to={"/"}
        className={classes.returnButton}
      >
        <ArrowBack />
      </IconButton>
      <div className={classes.background}>
        <div className={classes.header}>
          <h3 className={classes.description}>{`Анализы за ${date}`}</h3>
        </div>
        {results.map((result, index) => (
          <ResultCard
            shortName={result.shortName}
            fullName={result.fullName}
            value={result.value}
            metric={result.metric}
            key={index}
          />
        ))}
        {!props.currentUser ? (
          <Button
            variant="contained"
            color="secondary"
            // onClick={signInWithGoogle}
            component={Link}
            to={"/home"}
          >
            Сохранить результат
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to={"/home"}
            //TODO add functionality
          >
            Отправить врачу
          </Button>
        )}
      </div>
    </>
  );
};

export default Result;
