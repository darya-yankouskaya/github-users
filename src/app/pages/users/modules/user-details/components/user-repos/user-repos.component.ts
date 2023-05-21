import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserRepo } from '../../../../models/user-repo.model';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserReposComponent {
  @Input({ required: true }) set repos(items: UserRepo[]) {
    this.allRepos = items;
    this.visibleRepos =
      items.length > this.maxCount ? items.slice(0, this.maxCount) : items;
  }

  public allRepos: UserRepo[] = [];
  public visibleRepos: UserRepo[] = [];
  private readonly maxCount = 5;

  public repoTrackBy(index: number, repo: UserRepo) {
    return repo.id;
  }

  public showAllRepos(): void {
    this.visibleRepos = this.allRepos;
  }
}
