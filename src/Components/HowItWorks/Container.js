import { connect } from 'react-redux';
import ContactUs from './Component';
import {
  setContactUsField,
  sendMessage,
} from '../../redux/reducers/contactus/actions';

const mapStateToProps = state => ({
  isLoading: state.contactUs.isLoading,
  email: state.contactUs.email,
  name: state.contactUs.name,
  message: state.contactUs.message,
});

const mapDispatchToProps = dispatch => ({
  setFieldValue: (field, value) => dispatch(setContactUsField(field, value)),
  sendMessage: (name, email, message) =>
    dispatch(sendMessage(name, email, message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
