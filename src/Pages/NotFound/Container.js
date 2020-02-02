import { connect } from 'react-redux';
import { REDIRECT } from '../../redux/reducers/common/constants';
import NotFound from './Page';

const mapDispatchToProps = dispatch => ({
  onRedirect: () => dispatch({ type: REDIRECT, redirectTo: '/' }),
});

const NotFoundCountainer = connect(null, mapDispatchToProps)(NotFound);

export default NotFoundCountainer;
