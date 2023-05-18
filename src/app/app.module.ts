import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { routerFeatureKey } from './shared/store/router/router.state';
import { CustomRouterStateSerializer } from './core/utils/router-serializer.util';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    EffectsModule.forRoot(),
    StoreModule.forRoot({
      [routerFeatureKey]: routerReducer,
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomRouterStateSerializer,
    }),
    StoreDevtoolsModule.instrument({
      // logOnly: TODO: log only for dev mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
