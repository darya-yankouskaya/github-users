import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, map } from 'rxjs';
import { User, UserDto } from 'src/app/pages/users/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<UserDto[]>(`${environment.githubAPI}/users`).pipe(
      map(users =>
        users.map(user => ({
          avatarUrl: user.avatar_url,
          id: user.id,
          login: user.login,
        })),
      ),
    );
  }

  getUserByUsername(username: string) {
    return this.http.get(`${environment.githubAPI}/users/${username}`);
  }
}
