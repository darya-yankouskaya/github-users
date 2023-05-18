import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatSlideToggleModule,
  MatIconModule,
];

@NgModule({
  imports: [CommonModule, ...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES, CommonModule],
})
export class SharedModule {}
