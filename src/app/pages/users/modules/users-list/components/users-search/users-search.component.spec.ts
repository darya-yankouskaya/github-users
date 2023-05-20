import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { UsersSearchComponent } from './users-search.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('UsersSearchComponent', () => {
  let component: UsersSearchComponent;
  let fixture: ComponentFixture<UsersSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersSearchComponent],
      providers: [provideMockStore({})],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(UsersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
