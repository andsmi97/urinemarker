import { connect } from 'react-redux';
import SignIn from './Page';
import { signIn, onGoogleSignIn } from '../../redux/reducers/common/actions';

const mapStateToProps = state => ({
  authInProgress: state.common.authInProgress,
});

const mapDispatchToProps = dispatch => ({
  onSignIn: ({ email, password }) => dispatch(signIn({ email, password })),
  onGoogleSignIn: () => dispatch(onGoogleSignIn()),
});
const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignInContainer;
