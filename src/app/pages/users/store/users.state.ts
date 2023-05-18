import { User, UserDetails } from '../models/user.model';

export interface UsersState {
  users: User[];
  userDetails: UserDetails | null;
  userFollowers: User[];
}

export const initialState: UsersState = {
  users: [],
  userDetails: null,
  userFollowers: [],
};

export const usersFeatureKey = 'users';
