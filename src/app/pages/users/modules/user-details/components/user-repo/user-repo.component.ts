import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserRepo } from '../../../../models/user-repo.model';
import { USER_REPO_DATA } from '../../../../constants/user-repo.constants';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRepoComponent {
  @Input({ required: true }) repo!: UserRepo;

  public readonly userRepoData = USER_REPO_DATA;
}
