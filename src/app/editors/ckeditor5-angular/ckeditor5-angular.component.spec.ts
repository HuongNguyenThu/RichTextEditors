import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ckeditor5AngularComponent } from './ckeditor5-angular.component';

describe('Ckeditor5AngularComponent', () => {
  let component: Ckeditor5AngularComponent;
  let fixture: ComponentFixture<Ckeditor5AngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ckeditor5AngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ckeditor5AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
