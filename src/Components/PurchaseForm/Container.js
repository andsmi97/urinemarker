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
  selectAmount,
} from '../../redux/reducers/orders/selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsOrdersFetching,
  phoneNumber: selectPhoneNumber,
  name: selectName,
  purchaseFormStatus: selectPurchaseFormStatus,
  amount: selectAmount,
});

const mapDispatchToProps = dispatch => ({
  onCreateOrder: (name, phone, amount) =>
    dispatch(createOrder(name, phone, amount)),
  onFieldChange: (field, value) => dispatch(onFieldChange(field, value)),
  onPurchaseFormChangeStatus: status =>
    dispatch(onPurchaseFormChangeStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseForm);
