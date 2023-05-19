import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBarComponent } from './info-bar.component';
import { SharedModule } from '../../shared.module';

describe('InfoBarComponent', () => {
  let component: InfoBarComponent;
  let fixture: ComponentFixture<InfoBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoBarComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(InfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
