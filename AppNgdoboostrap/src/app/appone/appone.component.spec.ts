import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApponeComponent } from './appone.component';

describe('ApponeComponent', () => {
  let component: ApponeComponent;
  let fixture: ComponentFixture<ApponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApponeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
