import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanphletViewComponent } from './panphlet-view.component';

describe('PanphletViewComponent', () => {
  let component: PanphletViewComponent;
  let fixture: ComponentFixture<PanphletViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanphletViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanphletViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
