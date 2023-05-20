import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBarComponent } from './info-bar.component';
import { SharedModule } from '../../shared.module';
import { By } from '@angular/platform-browser';
import { MatTooltip } from '@angular/material/tooltip';

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
    component.info = 'Some Info';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render info', () => {
    const imageElement: HTMLElement =
      fixture.nativeElement.querySelector('.info-bar__info');

    expect(imageElement.textContent).toEqual(component.info);
  });

  it('should show the tooltip with info', () => {
    const tooltipDE = fixture.debugElement.query(By.css('.info-bar'));
    const tooltip = tooltipDE.injector.get(MatTooltip);

    expect(tooltip).toBeTruthy();
    expect(tooltip.message).toEqual(component.info);
  });
});
