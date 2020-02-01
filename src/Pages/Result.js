import React, { useState, useEffect } from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ResultCard from '../Components/ResultCard';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { createSubstancesArray } from '../substances.js';
import { getDayTitle } from '../functools';
import firestoreQueries from '../firebase/firestoreQueries';

const useStyles = makeStyles(theme => ({
  background: {
    background: theme.palette.primary.light,
    height: '100vh',
    width: '100vw',
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 16,
  },
  returnButton: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));

const Result = ({ id }) => {
  const classes = useStyles();
  const [resultDate, setResultDate] = useState(new Date());
  const [results, setResults] = useState([]);
  const date = getDayTitle(resultDate);

  useEffect(() => {
    (async () => {
      const result = await firestoreQueries.Analyzes.getOne(id);
      setResults(createSubstancesArray(result));
      setResultDate(result.date.toDate());
    })();
    return () => {};
  }, [id]);
  return (
    <>
      <IconButton
        aria-label="Назад"
        component={Link}
        to={'/'}
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
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to={'/'}
          //TODO add functionality
        >
          Отправить врачу
        </Button>
      </div>
    </>
  );
};

export default Result;
