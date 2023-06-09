import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { UserCardComponent } from './components/user-card/user-card.component';
import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatTooltipModule,
  MatButtonModule,
];

const SHARED_COMPONENT = [
  UserCardComponent,
  InfoBarComponent,
  NoDataFoundComponent,
];

@NgModule({
  imports: [CommonModule, ...MATERIAL_MODULES, NgOptimizedImage],
  exports: [
    ...MATERIAL_MODULES,
    CommonModule,
    ...SHARED_COMPONENT,
    NgOptimizedImage,
  ],
  declarations: [...SHARED_COMPONENT],
})
export class SharedModule {}
