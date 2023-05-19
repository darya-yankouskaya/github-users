import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserRepo } from 'src/app/pages/users/models/user-repo.model';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserReposComponent {
  @Input({ required: true }) repos!: UserRepo[];
}
