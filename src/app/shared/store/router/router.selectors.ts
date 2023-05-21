import { createFeatureSelector, createSelector } from '@ngrx/store';

import { routerFeatureKey, RouterState } from './router.state';

export const selectRouterFeature =
  createFeatureSelector<RouterState>(routerFeatureKey);

export const selectParams = createSelector(
  selectRouterFeature,
  ({ state }: RouterState) => state.params,
);

export const selectQueryParams = createSelector(
  selectRouterFeature,
  ({ state }: RouterState) => state.queryParams,
);

export const selectUrl = createSelector(
  selectRouterFeature,
  ({ state }: RouterState) => state.url,
);
