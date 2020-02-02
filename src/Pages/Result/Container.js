import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchAnalysisStartAsync } from '../../redux/reducers/analyzes/actions';
import {
  selectCurrentAnalysis,
  selectIsAnalysisFetching,
  selectAnalysisDate,
} from '../../redux/reducers/analyzes/selectors';
import Result from './Page';

const mapStateToProps = createStructuredSelector({
  results: selectCurrentAnalysis,
  isLoading: selectIsAnalysisFetching,
  analysisDate: selectAnalysisDate,
});
const mapDispatchToProps = dispatch => ({
  getAnalysisResult: id => dispatch(fetchAnalysisStartAsync(id)),
});

const ResultContainer = connect(mapStateToProps, mapDispatchToProps)(Result);

export default ResultContainer;
