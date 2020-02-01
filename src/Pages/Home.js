import React, { useState, useEffect } from 'react';
import BottomMenu from '../Components/BottomMenu';
import AnalysisCard from '../Components/AnalysisCard';
import { makeStyles } from '@material-ui/core/styles';
import firestoreQueries from '../firebase/firestoreQueries';
const useStyles = makeStyles(theme => ({
  background: {
    height: '100vh',
    width: '100vw',
    background: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflowY: 'scroll',
    paddingBottom: 100,
  },
  title: {
    textAlign: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();
  const [analyzes, setAnalyzes] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await firestoreQueries.Analyzes.getAll();
      setAnalyzes(result);
    })();
  }, []);

  //TODO: ADD empty analysis and loading
  return (
    <>
      <div className={classes.background}>
        <h3 className={classes.title}>Последние анализы</h3>
        {analyzes.map(analysis => (
          <AnalysisCard
            date={analysis.date}
            key={analysis.id}
            id={analysis.id}
          />
        ))}
      </div>
      <BottomMenu />
    </>
  );
};

export default Home;
