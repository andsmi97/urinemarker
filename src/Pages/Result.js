import React from "react";
import ArrowBack from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ResultCard from "../Components/ResultCard";
const Result = props => {
  return (
    <>
      <IconButton aria-label="Назад">
        <ArrowBack />
      </IconButton>
      {props.description}
      {props.results.map(result => (
        <ResultCard
          shortName={result.shortName}
          fullName={result.fullName}
          value={result.value}
          metric={result.metric}
        />
      ))}
      <Button variant="contained" color="secondary">
        Отправить врачу
      </Button>
    </>
  );
};

export default Result;
