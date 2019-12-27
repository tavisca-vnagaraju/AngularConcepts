import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SibblingThreeComponent } from './sibbling-three.component';

describe('SibblingThreeComponent', () => {
  let component: SibblingThreeComponent;
  let fixture: ComponentFixture<SibblingThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SibblingThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SibblingThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
