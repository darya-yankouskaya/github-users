import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState, usersFeatureKey } from './users.state';
import { selectQueryParams } from '../../../shared/store/router/router.selectors';
import { User } from '../models/user.model';
import { QueryParams } from '../../../shared/enums/query-params.enum';

export const selectUsersFeature =
  createFeatureSelector<UsersState>(usersFeatureKey);

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.users,
);

export const selectFilteredUsers = createSelector(
  selectUsers,
  selectQueryParams,
  (users, queryParams): User[] => {
    const query: string | undefined =
      queryParams[QueryParams.Name]?.toLowerCase?.();

    return query
      ? users.filter(user => user.login.toLowerCase().includes(query))
      : users;
  },
);

export const selectUserDetails = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.userDetails,
);
