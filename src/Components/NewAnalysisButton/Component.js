import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { useStyles } from './styles';

const NewAnalysisButton = ({ onCreateAnalysis, isLoading }) => {
  const classes = useStyles();

  const handleFile = event => {
    const file = event.target.files[0];
    onCreateAnalysis(file);
  };

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
          color="primary"
          aria-label="add"
          component="span"
          className={classes.fabButton}
          disabled={isLoading}
        >
          <AddIcon />
        </Fab>
      </label>
    </>
  );
};

export default NewAnalysisButton;
