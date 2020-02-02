import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { SIGN_OUT } from '../../redux/reducers/common/constants';
import Drawer from '../Drawer/Component';
import NewAnalysisButton from '../NewAnalysisButton/Container';
import { connect } from 'react-redux';
import { openSnack } from '../../redux/reducers/common/actions';
import { useStyles } from './styles';
const mapDispatchToProps = dispatch => ({
  onSignOut: () => dispatch({ type: SIGN_OUT }),
  onSnackOpen: () => dispatch(openSnack({ type: 'error', message: 'test' })),
});

const BottomMenu = props => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          {/*TODO: change onCLick*/}
          <Drawer />
          <NewAnalysisButton />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default connect(() => ({}), mapDispatchToProps)(BottomMenu);
