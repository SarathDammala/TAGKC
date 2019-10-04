import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImgSilderComponent } from './main-img-silder.component';

describe('MainImgSilderComponent', () => {
  let component: MainImgSilderComponent;
  let fixture: ComponentFixture<MainImgSilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainImgSilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImgSilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
