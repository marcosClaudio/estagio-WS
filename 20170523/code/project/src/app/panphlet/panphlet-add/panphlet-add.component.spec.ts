import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanphletAddComponent } from './panphlet-add.component';

describe('PanphletAddComponent', () => {
  let component: PanphletAddComponent;
  let fixture: ComponentFixture<PanphletAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanphletAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanphletAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
