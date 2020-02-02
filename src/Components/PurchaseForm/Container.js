import { connect } from 'react-redux';
import { createOrder } from '../../redux/reducers/orders/actions';
import PurchaseForm from './Component';
import { createStructuredSelector } from 'reselect';
import { selectIsOrdersFetching } from '../../redux/reducers/orders/selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsOrdersFetching,
});

const mapDispatchToProps = dispatch => ({
  onCreateOrder: (name, phone) => dispatch(createOrder(name, phone)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseForm);
