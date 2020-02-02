import { createSelector } from 'reselect';

const selectAnalyzes = state => state.analyzes;

export const selectUserAnalyzes = createSelector(
  [selectAnalyzes],
  analyzes => analyzes.userAnalyzes
);
export const selectCurrentAnalysis = createSelector(
  [selectAnalyzes],
  analyzes => analyzes.currentAnalysis
);

export const selectIsAnalyzesFetching = createSelector(
  [selectAnalyzes],
  analyzes => analyzes.isFetching
);
export const selectIsAnalysisFetching = createSelector(
  [selectAnalyzes],
  analyzes => analyzes.isFetching
);

export const selectIsAnalysisCreating = createSelector(
  [selectAnalyzes],
  analyzes => analyzes.isFetching
);

export const selectIsAnalyzesLoaded = createSelector(
  [selectAnalyzes],
  analyzes => !!analyzes.userAnalyzes
);

export const selectIsAnalysisLoaded = createSelector(
  [selectAnalyzes],
  analyzes => !!analyzes.currentAnalysis
);

export const selectAnalysisDate = createSelector(
  [selectAnalyzes],
  analyzes => analyzes.analysisDate
);
