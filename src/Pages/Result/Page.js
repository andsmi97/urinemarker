import React, { useEffect } from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import ResultCard from '../../Components/ResultCard/Component';
import { Link } from 'react-router-dom';
import { getDayTitle } from '../../functools';
import { useStyles } from './styles';
import Loader from '../../Components/Loader/Component';

const Result = ({
  results,
  id,
  analysisDate,
  isLoading,
  getAnalysisResult,
}) => {
  const classes = useStyles();
  const date = getDayTitle(analysisDate);

  useEffect(() => {
    getAnalysisResult(id);
  }, [id, getAnalysisResult]);
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
        {isLoading && <Loader />}
        {!isLoading &&
          results.map((result, index) => (
            <ResultCard
              shortName={result.shortName}
              fullName={result.fullName}
              value={result.value}
              metric={result.metric}
              key={index}
            />
          ))}
        {/* <Button
          variant="contained"
          color="primary"
          component={Link}
          to={'/'}
          //TODO add functionality
        >
          Отправить врачу
        </Button> */}
      </div>
    </>
  );
};

export default Result;
