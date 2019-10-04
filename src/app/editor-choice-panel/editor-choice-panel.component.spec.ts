import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorChoicePanelComponent } from './editor-choice-panel.component';

describe('EditorChoicePanelComponent', () => {
  let component: EditorChoicePanelComponent;
  let fixture: ComponentFixture<EditorChoicePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorChoicePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorChoicePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
