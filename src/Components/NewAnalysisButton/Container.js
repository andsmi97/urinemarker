import { connect } from 'react-redux';
import { createAnalysis } from '../../redux/reducers/analyzes/actions';
import NewAnalysisButton from './Component';
import { createStructuredSelector } from 'reselect';
import { selectIsAnalysisCreating } from '../../redux/reducers/analyzes/selectors';

const mapDispatchToProps = dispatch => ({
  onCreateAnalysis: file => dispatch(createAnalysis(file)),
});

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsAnalysisCreating,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAnalysisButton);
