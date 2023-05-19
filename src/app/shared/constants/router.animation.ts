import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routerAnimation = trigger('routerTransition', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      style({ position: 'fixed', maxWidth: '1200px', width: '100%' }),
      {
        optional: true,
      },
    ),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(150%)' }),
          animate('1000ms ease', style({ transform: 'translateX(0%)' })),
        ],
        { optional: true },
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('1000ms ease', style({ transform: 'translateX(-150%)' })),
        ],
        { optional: true },
      ),
    ]),
  ]),
]);
