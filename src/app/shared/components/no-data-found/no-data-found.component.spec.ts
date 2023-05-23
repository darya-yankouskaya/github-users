import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { NoDataFoundComponent } from './no-data-found.component';
import { findElementByCss } from '../../utils/testing.helpers';

describe('NoDataFoundComponent', () => {
  let component: NoDataFoundComponent;
  let fixture: ComponentFixture<NoDataFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoDataFoundComponent],
      imports: [MatCardModule, NgOptimizedImage],
    });
    fixture = TestBed.createComponent(NoDataFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the image with correct alt text and source', () => {
    const imageElement: HTMLImageElement = findElementByCss(
      fixture,
      'img.no-data-found__image',
    )!;

    expect(imageElement).toBeTruthy();
    expect(imageElement.src).toBeTruthy();
    expect(imageElement.alt).toBe(component.imageAltText);
  });
});
