import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';
import { SharedModule } from '../../shared.module';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCardComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    component.avatarUrl = 'www.test.jpg';
    component.login = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title with user login', () => {
    const elem = fixture.nativeElement.querySelector('h3.user-card__title');

    expect(elem.textContent).toEqual(component.login);
  });

  it('should render image with provided source and alt text', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector(
      'img.user-card__avatar',
    );

    expect(img.alt).toBeTruthy();
    expect(img.src).toContain(component.avatarUrl);
  });
});
