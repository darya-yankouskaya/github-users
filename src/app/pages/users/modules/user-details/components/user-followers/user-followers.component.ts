import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFollowersComponent {
  @Input() followers: User[] = [];
}
