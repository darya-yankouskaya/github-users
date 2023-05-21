import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { merge } from 'lodash-es';
import { sharedFeatureKey } from '../../shared/store/shared.state';

export function storageMetaReducer<S, A extends Action = Action>(
  reducer: ActionReducer<S, A>,
) {
  let isInit = true;

  return function (state: S, action: A): S {
    let nextState = reducer(state, action)!;

    if (isInit) {
      isInit = false;
      const savedStateStr = localStorage.getItem(sharedFeatureKey);
      const savedState = savedStateStr ? JSON.parse(savedStateStr) : {};
      nextState = merge(nextState, { [sharedFeatureKey]: savedState });
    }

    if (typeof nextState === 'object' && sharedFeatureKey in nextState) {
      localStorage.setItem(
        sharedFeatureKey,
        JSON.stringify(nextState[sharedFeatureKey]),
      );
    }

    return nextState;
  };
}

export const metaReducers: MetaReducer[] = [storageMetaReducer];
