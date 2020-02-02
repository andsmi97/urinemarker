import { connect } from 'react-redux';
import SignIn from './Page';
import { signIn } from '../../redux/reducers/common/actions';

const mapStateToProps = state => ({
  authInProgress: state.common.authInProgress,
});

const mapDispatchToProps = dispatch => ({
  onSignIn: ({ email, password }) => dispatch(signIn({ email, password })),
});
const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignInContainer;
