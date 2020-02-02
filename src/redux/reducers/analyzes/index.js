import {
  GET_ANALYZES_START,
  GET_ANALYZES_SUCCESS,
  GET_ANALYZES_FAILURE,
  GET_ANALYSIS_START,
  GET_ANALYSIS_SUCCESS,
  GET_ANALYSIS_FAILURE,
  SET_ANALYSIS_DATE,
  CREATE_ANALYSIS_START,
  CREATE_ANALYSIS_SUCESS,
  CREATE_ANALYSIS_FAILURE,
} from './constants';

const defaultState = {
  currentAnalysis: [],
  isFetching: true,
  userAnalyzes: [],
  analysisDate: new Date(),
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_ANALYZES_START:
    case GET_ANALYSIS_START:
    case CREATE_ANALYSIS_START:
      return { ...state, isFetching: true };
    case GET_ANALYZES_SUCCESS:
      return { ...state, isFetching: false, userAnalyzes: action.payload };
    case GET_ANALYSIS_SUCCESS:
      return { ...state, isFetching: false, currentAnalysis: action.payload };
    case GET_ANALYZES_FAILURE:
    case GET_ANALYSIS_FAILURE:
    case CREATE_ANALYSIS_SUCESS:
    case CREATE_ANALYSIS_FAILURE:
      return { ...state, isFetching: false };
    case SET_ANALYSIS_DATE:
      return { ...state, analysisDate: action.payload };
    default:
      return state;
  }
};
