import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptwoComponent } from './apptwo.component';

describe('ApptwoComponent', () => {
  let component: ApptwoComponent;
  let fixture: ComponentFixture<ApptwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApptwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApptwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
