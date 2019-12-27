import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropPart2Component } from './drag-and-drop-part2.component';

describe('DragAndDropPart2Component', () => {
  let component: DragAndDropPart2Component;
  let fixture: ComponentFixture<DragAndDropPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAndDropPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
