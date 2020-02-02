import { connect } from 'react-redux';
import {
  selectUserAnalyzes,
  selectIsAnalyzesFetching,
} from '../../redux/reducers/analyzes/selectors';
import { createStructuredSelector } from 'reselect';
import { fetchAnalyzesStartAsync } from '../../redux/reducers/analyzes/actions';
import Home from './Page';
const mapStateToProps = createStructuredSelector({
  analyzes: selectUserAnalyzes,
  isLoading: selectIsAnalyzesFetching,
});

const mapDispatchToProps = dispatch => ({
  getAnalyzes: () => dispatch(fetchAnalyzesStartAsync()),
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
