import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, map } from 'rxjs';
import {
  User,
  UserDetails,
  UserDetailsDto,
  UserDto,
} from '../../pages/users/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<UserDto[]>(`${environment.githubAPI}/users`)
      .pipe(map(users => this.transformUserDtoToUser(users)));
  }

  getUserByUsername(username: string): Observable<UserDetails> {
    return this.http
      .get<UserDetailsDto>(`${environment.githubAPI}/users/${username}`)
      .pipe(
        map(details => ({
          avatarUrl: details.avatar_url,
          bio: details.bio,
          blog: details.blog,
          company: details.company,
          createdAt: details.created_at,
          email: details.email,
          id: details.id,
          followers: details.followers,
          followersUrl: details.followers_url,
          following: details.following,
          hireable: details.hireable,
          location: details.location,
          login: details.login,
          name: details.name,
          publicRepos: details.public_repos,
          publicGists: details.public_gists,
          reposUrl: details.repos_url,
          twitterUsername: details.twitter_username,
          updatedAt: details.updated_at,
        })),
      );
  }

  getUserFollowers(url: string): Observable<User[]> {
    return this.http
      .get<UserDto[]>(url)
      .pipe(map(users => this.transformUserDtoToUser(users)));
  }

  private transformUserDtoToUser(users: UserDto[]): User[] {
    return users.map(user => ({
      avatarUrl: user.avatar_url,
      id: user.id,
      login: user.login,
    }));
  }
}
