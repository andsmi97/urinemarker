import { connect } from 'react-redux';
import Welcome from './Page';
import { onGoogleSignIn } from '../../redux/reducers/common/actions';

const mapStateToProps = state => ({
  authInProgress: state.common.authInProgress,
});

const mapDispatchToProps = dispatch => ({
  onGoogleSignIn: () => dispatch(onGoogleSignIn()),
});
const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);

export default WelcomeContainer;
