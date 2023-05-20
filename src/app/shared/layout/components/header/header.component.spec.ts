import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../../../shared.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [ReactiveFormsModule, SharedModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have home button with routerlink', () => {
    const linkDE = fixture.debugElement.query(By.css('.header__home-link'));

    expect(linkDE).toBeTruthy();

    const routerLink = linkDE.injector.get(RouterLink);

    expect(routerLink.queryParamsHandling).toBe('merge');
    expect(routerLink.href).toBe('/');
  });

  it('should switch theme', async () => {
    const toggleComponent: MatSlideToggle = fixture.debugElement.query(
      By.directive(MatSlideToggle),
    ).componentInstance;
    const initClassList = document.body.classList;

    expect(initClassList.contains('theme-light')).toBeTrue();

    toggleComponent.toggle();

    const classList = document.body.classList;
    expect(classList.contains('theme-light')).toBeFalse();
  });
});
