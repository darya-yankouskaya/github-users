import { createAction, props } from '@ngrx/store';
import { User, UserDetails } from '../models/user.model';

const userActionsPrefix = '[Solution API]';

export const getUsers = createAction(`${userActionsPrefix} Get Users`);

export const getUsersSuccess = createAction(
  `${userActionsPrefix} Get Solution Success`,
  props<{ payload: User[] }>(),
);

export const getUserDetails = createAction(
  `${userActionsPrefix} Get User Details`,
);

export const getUserDetailsSuccess = createAction(
  `${userActionsPrefix} Get User Details Success`,
  props<{ payload: UserDetails }>(),
);

export const resetSelectedUser = createAction(
  `${userActionsPrefix} Reset Selected User`,
);

export const getUserFollowers = createAction(
  `${userActionsPrefix} Get User Followers`,
  props<{ payload: string }>(),
);

export const getUserFollowersSuccess = createAction(
  `${userActionsPrefix} Get User Followers Success`,
  props<{ payload: User[] }>(),
);
