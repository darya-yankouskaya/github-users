import { UserRepo } from '../models/user-repo.model';
import { User, UserDetails } from '../models/user.model';

export interface UsersState {
  users: User[];
  userDetails: UserDetails | null;
  userFollowers: User[];
  userRepos: UserRepo[];
}

export const initialState: UsersState = {
  users: [],
  userDetails: null,
  userFollowers: [],
  userRepos: [],
};

export const usersFeatureKey = 'users';
