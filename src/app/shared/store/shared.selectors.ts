import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState, sharedFeatureKey } from './shared.state';

export const selectSharedFeature =
  createFeatureSelector<SharedState>(sharedFeatureKey);

export const selectIsSpinnerVisible = createSelector(
  selectSharedFeature,
  (state: SharedState) => state.isSpinnerVisible,
);

export const selectIsDarkMode = createSelector(
  selectSharedFeature,
  (state: SharedState) => state.isDarkMode,
);
