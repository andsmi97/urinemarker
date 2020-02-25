import { connect } from 'react-redux';
import {
  setSubscribeField,
  subscribe,
} from '../../redux/reducers/newsletter/actions';
import NewsLetter from './Component';

const mapStateToProps = state => ({
  isLoading: state.newsletter.isLoading,
  email: state.newsletter.email,
});

const mapDispatchToProps = dispatch => ({
  setFieldValue: (field, value) => dispatch(setSubscribeField(field, value)),
  subscribe: email => dispatch(subscribe(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsLetter);
