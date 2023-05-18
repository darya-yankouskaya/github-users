import { Params } from '@angular/router';

export interface RouterState {
  navigationId: number;
  state: RouterStateUrl;
}

export interface RouterStateUrl {
  params: Params;
  queryParams: Params;
  url: string;
}

export const routerFeatureKey = 'router';
