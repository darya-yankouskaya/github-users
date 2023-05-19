import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { routerFeatureKey } from './shared/store/router/router.state';
import { CustomRouterStateSerializer } from './core/utils/router-serializer.util';
import { GithubTokenInterceptor } from './core/interceptors/github-token.interceptor';
import { sharedFeatureKey } from './shared/store/shared.state';
import { sharedReducer } from './shared/store/shared.reducers';
import { environment } from '../environments/environment';
import { LoadingSpinnerInterceptor } from './core/interceptors/loading-spinner.interceptor';
import { SharedEffects } from './shared/store/shared.effects';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    EffectsModule.forRoot([SharedEffects]),
    StoreModule.forRoot({
      [routerFeatureKey]: routerReducer,
      [sharedFeatureKey]: sharedReducer,
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomRouterStateSerializer,
    }),
    StoreDevtoolsModule.instrument({
      logOnly: !environment.production,
    }),
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GithubTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingSpinnerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
