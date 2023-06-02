import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltip } from '@angular/material/tooltip';
import { InfoBarComponent } from './info-bar.component';
import { SharedModule } from '../../shared.module';
import {
  findDebugElementByCss,
  findElementByCss,
} from '../../utils/testing.helpers';

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
    const info = findElementByCss(fixture, '.info-bar__info')!;

    expect(info.textContent).toEqual(component.info);
  });

  it('should show the tooltip with info', () => {
    const tooltipInfoDE = findDebugElementByCss(fixture, '.info-bar__info')!;
    const tooltip = tooltipInfoDE.injector.get(MatTooltip);

    expect(tooltip).toBeTruthy();
    expect(tooltip.message).toEqual(component.info);
  });
});
