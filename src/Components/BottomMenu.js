import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { auth } from '../firebase/utils';
import NewAnalysisButton from './NewAnalysisButton';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const BottomMenu = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          {/*TODO: change onCLick*/}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="открыть меню"
            onClick={() => auth.signOut()}
          >
            <MenuIcon />
          </IconButton>
          <NewAnalysisButton />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default BottomMenu;
