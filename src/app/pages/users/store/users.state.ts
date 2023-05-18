import { User, UserDetails } from '../models/user.model';

export interface UsersState {
  users: User[];
  userDetails: UserDetails | null;
}

export const initialState: UsersState = {
  users: [],
  userDetails: null,
};

export const usersFeatureKey = 'users';
