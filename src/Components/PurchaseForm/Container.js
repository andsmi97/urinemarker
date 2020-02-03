import { connect } from 'react-redux';
import {
  createOrder,
  onFieldChange,
  onPurchaseFormChangeStatus,
} from '../../redux/reducers/orders/actions';
import PurchaseForm from './Component';
import { createStructuredSelector } from 'reselect';
import {
  selectPhoneNumber,
  selectName,
  selectIsOrdersFetching,
  selectPurchaseFormStatus,
} from '../../redux/reducers/orders/selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsOrdersFetching,
  phoneNumber: selectPhoneNumber,
  name: selectName,
  purchaseFormStatus: selectPurchaseFormStatus,
});

const mapDispatchToProps = dispatch => ({
  onCreateOrder: (name, phone) => dispatch(createOrder(name, phone)),
  onFieldChange: (field, value) => dispatch(onFieldChange(field, value)),
  onPurchaseFormChangeStatus: status =>
    dispatch(onPurchaseFormChangeStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseForm);
