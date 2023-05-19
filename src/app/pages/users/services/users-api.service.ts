import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  User,
  UserDetails,
  UserDetailsDto,
  UserDto,
} from '../models/user.model';
import { UserRepo, UserRepoDto } from '../models/user-repo.model';

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
      .pipe(map(details => this.transformUserDetailsDtoToUserDetails(details)));
  }

  getUserFollowers(url: string): Observable<User[]> {
    return this.http
      .get<UserDto[]>(url)
      .pipe(map(users => this.transformUserDtoToUser(users)));
  }

  getUserRepos(url: string): Observable<UserRepo[]> {
    return this.http
      .get<UserRepoDto[]>(url)
      .pipe(map(repos => this.transformUserRepoDtoToUserRepo(repos)));
  }

  private transformUserDtoToUser(users: UserDto[]): User[] {
    return users.map(user => ({
      avatarUrl: user.avatar_url,
      id: user.id,
      login: user.login,
    }));
  }

  private transformUserRepoDtoToUserRepo(repos: UserRepoDto[]): UserRepo[] {
    return repos.map(repo => ({
      description: repo.description,
      id: repo.id,
      forksCount: repo.forks_count,
      language: repo.language,
      name: repo.name,
      openIssuesCount: repo.open_issues_count,
      stargazersCount: repo.stargazers_count,
      updatedAt: repo.updated_at,
      url: repo.url,
      visibility: repo.visibility,
      watchersCount: repo.watchers_count,
    }));
  }

  private transformUserDetailsDtoToUserDetails(
    details: UserDetailsDto,
  ): UserDetails {
    return {
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
    };
  }
}
