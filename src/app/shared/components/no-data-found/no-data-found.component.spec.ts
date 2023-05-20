import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { NoDataFoundComponent } from './no-data-found.component';

describe('NoDataFoundComponent', () => {
  let component: NoDataFoundComponent;
  let fixture: ComponentFixture<NoDataFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoDataFoundComponent],
      imports: [MatCardModule],
    });
    fixture = TestBed.createComponent(NoDataFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the image with correct alt text', () => {
    const imageElement: HTMLImageElement = fixture.nativeElement.querySelector(
      'img.no-data-found__image',
    );
    expect(imageElement).toBeTruthy();
    expect(imageElement.alt).toBe('No Data Found');
  });
});
