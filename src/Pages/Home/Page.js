import React, { useEffect } from 'react';
import BottomMenu from '../../Components/BottomMenu/Component';
import AnalysisCard from '../../Components/AnalysisCard/Component';
import { ReactComponent as NoData } from '../../assets/images/NoData.svg';
import Loader from '../../Components/Loader/Component';
import { useStyles } from './styles';

const Home = ({ analyzes, getAnalyzes, isLoading }) => {
  const classes = useStyles();

  useEffect(() => {
    getAnalyzes();
  }, [getAnalyzes]);

  return (
    <>
      <div className={classes.background}>
        <h3 className={classes.title}>Последние анализы</h3>
        {isLoading && <Loader />}
        {!!analyzes.length &&
          !isLoading &&
          analyzes.map(analysis => (
            <AnalysisCard
              date={analysis.date}
              key={analysis.id}
              id={analysis.id}
            />
          ))}
        {!analyzes.length && !isLoading && (
          <>
            <h3 className={classes.title}>У вас еще нет анализов</h3>
            <NoData className={classes.image} />
            <h3 className={classes.title}>
              Нажмите кнопку ниже, чтобы добавить
            </h3>
          </>
        )}
      </div>
      <BottomMenu />
    </>
  );
};

export default Home;
