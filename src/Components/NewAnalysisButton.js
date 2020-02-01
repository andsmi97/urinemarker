import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Redirect } from 'react-router-dom';
import agent from '../agent';
import { makeStyles } from '@material-ui/core/styles';
import firestoreQueries from '../firebase/firestoreQueries';

const useStyles = makeStyles(theme => ({
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const NewAnalysisButton = () => {
  const classes = useStyles();
  const [, setErrorMessage] = useState('');
  const [result, setResult] = useState({});
  const [redirect, setRedirect] = useState(false);

  const handleFile = async event => {
    setErrorMessage('');
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = async () => {
      //We are removing first 23 letters of base64 type, since api doesn't need those.
      const predicted = await agent.ColorDetector.predict(
        reader.result.slice(23)
      );
      if (!predicted.error) {
        const result = await firestoreQueries.Analyzes.create(predicted);
        setResult(result);
        setRedirect(true);
      } else {
        setErrorMessage(predicted.error);
      }
    };
  };

  if (redirect) {
    return <Redirect to={`/result/${result.id}`} />;
  }
  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
        style={{ display: 'none' }}
        id="image-input"
      />
      <label htmlFor="image-input">
        <Fab
          color="secondary"
          aria-label="add"
          component="span"
          className={classes.fabButton}
        >
          <AddIcon />
        </Fab>
      </label>
    </>
  );
};

export default NewAnalysisButton;
