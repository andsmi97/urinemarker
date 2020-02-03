import { connect } from 'react-redux';
import { onFieldChange } from '../../redux/reducers/orders/actions';
import PriceCalculator from './Component';
import { createStructuredSelector } from 'reselect';
import { selectAmount } from '../../redux/reducers/orders/selectors';

const mapStateToProps = createStructuredSelector({
  itemsAmount: selectAmount,
});

const mapDispatchToProps = dispatch => ({
  onFieldChange: (field, value) => dispatch(onFieldChange(field, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceCalculator);
