import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

const userActionsPrefix = '[Solution API]';

export const getUsers = createAction(`${userActionsPrefix} Get Users`);

export const getUsersSuccess = createAction(
  `${userActionsPrefix} Get Solution Success`,
  props<{ payload: User[] }>(),
);
