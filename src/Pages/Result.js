import React from "react";
import ArrowBack from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ResultCard from "../Components/ResultCard";
import {Link} from "react-router-dom"
const Result = props => {
  return (
    <>
      <IconButton aria-label="Назад" component={Link} to={'/'}>
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
      <Button variant="contained" color="secondary" component={Link} to={'/home'}>
        Отправить врачу
      </Button>
    </>
  );
};

export default Result;
