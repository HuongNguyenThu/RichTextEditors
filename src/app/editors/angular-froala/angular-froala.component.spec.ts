import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFroalaComponent } from './angular-froala.component';

describe('AngularFroalaComponent', () => {
  let component: AngularFroalaComponent;
  let fixture: ComponentFixture<AngularFroalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularFroalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFroalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
