import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateUrl } from '../../shared/store/router/router.state';

/**
 * The RouterStateSerializer takes the current RouterStateSnapshot
 * and returns any pertinent information needed. The snapshot contains
 * all information about the state of the router at the given point in time.
 * The entire snapshot is complex and not always needed. In this case, you only
 * need the URL and query parameters from the snapshot in the store. Other items could be
 * returned such as route parameters and static route data.
 */
export class CustomRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl>
{
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let params = {};
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
      params = {
        ...params,
        ...route.params,
      };
    }

    const {
      url,
      root: { queryParams },
    } = routerState;

    console.log({ url, params, queryParams });

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}
