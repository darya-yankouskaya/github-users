import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserDetails } from '../../../../models/user.model';
import {
  USER_MAIN_INFO_DATA,
  USER_STATISTIC_DATA,
} from '../../../../constants/user-details.constants';

@Component({
  selector: 'app-user-details-info',
  templateUrl: './user-details-info.component.html',
  styleUrls: ['./user-details-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsInfoComponent {
  @Input({ required: true }) userDetails!: UserDetails;

  public readonly statisticsData = USER_STATISTIC_DATA;
  public readonly userMainInfoData = USER_MAIN_INFO_DATA;
}
