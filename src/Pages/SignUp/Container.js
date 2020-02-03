import { connect } from 'react-redux';
import SignUp from './Page';
import { signUp, onGoogleSignIn } from '../../redux/reducers/common/actions';

const mapStateToProps = state => ({
  authInProgress: state.common.authInProgress,
});

const mapDispatchToProps = dispatch => ({
  onSignUp: ({ email, password }) => dispatch(signUp({ email, password })),
  onGoogleSignIn: () => dispatch(onGoogleSignIn()),
});
const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpContainer;
