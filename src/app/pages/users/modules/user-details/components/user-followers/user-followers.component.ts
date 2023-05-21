import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFollowersComponent {
  @Input({ required: true }) set followers(items: User[]) {
    this.allFollowers = items;
    this.visibleFollowers =
      items.length > this.maxCount ? items.slice(0, this.maxCount) : items;
  }

  public allFollowers: User[] = [];
  public visibleFollowers: User[] = [];
  public readonly maxCount = 10;

  public trackBy(index: number, follower: User) {
    return follower.id;
  }

  public showAllRepos(): void {
    this.visibleFollowers = this.allFollowers;
  }
}
