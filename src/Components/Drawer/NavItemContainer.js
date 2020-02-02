import { connect } from 'react-redux';
import { signOut } from '../../redux/reducers/common/actions';
import NavItem from './NavItem';

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch(signOut()),
});

export default connect(null, mapDispatchToProps)(NavItem);
