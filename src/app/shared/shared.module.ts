import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { UserCardComponent } from './components/user-card/user-card.component';
import { InfoBarComponent } from './components/info-bar/info-bar.component';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatSlideToggleModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
];

const SHARED_COMPONENT = [UserCardComponent, InfoBarComponent];

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
