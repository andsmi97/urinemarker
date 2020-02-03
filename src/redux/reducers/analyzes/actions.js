import {
  GET_ANALYZES_START,
  GET_ANALYZES_SUCCESS,
  GET_ANALYZES_FAILURE,
  GET_ANALYSIS_START,
  GET_ANALYSIS_SUCCESS,
  GET_ANALYSIS_FAILURE,
  CREATE_ANALYSIS_START,
  CREATE_ANALYSIS_SUCESS,
  CREATE_ANALYSIS_FAILURE,
  SET_ANALYSIS_DATE,
} from './constants';
import { openSnack, redirect } from '../common/actions';
import { createSubstancesArray } from './utils';
import firestoreQueries from '../../../firebase/firestoreQueries';
import { uploadImage } from '../../../firebase/storage';
import agent from '../../../agent';
export const fetchAnalyzesStart = () => ({
  type: GET_ANALYZES_START,
});

export const fetchAnalyzesSuccess = analyzes => ({
  type: GET_ANALYZES_SUCCESS,
  payload: analyzes,
});

export const fetchAnalyzesFailure = () => ({
  type: GET_ANALYZES_FAILURE,
});

export const fetchAnalysisStart = () => ({
  type: GET_ANALYSIS_START,
});

export const fetchAnalysisSuccess = analyzes => ({
  type: GET_ANALYSIS_SUCCESS,
  payload: analyzes,
});

export const fetchAnalysisFailure = () => ({
  type: GET_ANALYSIS_FAILURE,
});

export const fetchAnalyzesStartAsync = () => {
  return async dispatch => {
    dispatch(fetchAnalyzesStart());
    try {
      const analyzes = await firestoreQueries.Analyzes.getAll();
      dispatch(fetchAnalyzesSuccess(analyzes));
    } catch (e) {
      fetchAnalyzesFailure();
    }
  };
};

export const setAnalysisDate = analysis => ({
  type: SET_ANALYSIS_DATE,
  payload: analysis.date.toDate(),
});

export const fetchAnalysisStartAsync = id => async dispatch => {
  dispatch(fetchAnalysisStart());
  try {
    const analysis = await firestoreQueries.Analyzes.getOne(id);
    const result = createSubstancesArray(analysis);
    dispatch(fetchAnalysisSuccess(result));
    dispatch(setAnalysisDate(analysis));
  } catch (e) {
    fetchAnalysisFailure();
  }
};

export const createAnalysisStart = () => ({
  type: CREATE_ANALYSIS_START,
});

export const createAnalysisSuccess = () => ({
  type: CREATE_ANALYSIS_SUCESS,
});

export const createAnalysisFailure = () => ({
  type: CREATE_ANALYSIS_FAILURE,
});

export const createAnalysis = file => async dispatch => {
  dispatch(fetchAnalysisStart());
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = async () => {
    //We are removing first 23 letters of base64 type, since api doesn't need those.
    try {
      const predicted = await agent.ColorDetector.predict(
        reader.result.slice(23)
      );
      if (!predicted.error) {
        const result = await firestoreQueries.Analyzes.create(predicted);
        await uploadImage({ file, id: result.id });
        dispatch(createAnalysisSuccess());
        dispatch(redirect(`/result/${result.id}`));
      } else {
        dispatch(openSnack({ type: 'error', message: predicted.error }));
        await uploadImage({ file, error: predicted.error });
        dispatch(createAnalysisFailure());
      }
    } catch (e) {
      dispatch(
        openSnack({
          type: 'error',
          message: 'Возникла ошибка, повторите позже',
        })
      );
      dispatch(createAnalysisFailure());
    }
  };
};
