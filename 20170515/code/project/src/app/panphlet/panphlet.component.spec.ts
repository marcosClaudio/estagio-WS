import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanphletComponent } from './panphlet.component';

describe('PanphletComponent', () => {
  let component: PanphletComponent;
  let fixture: ComponentFixture<PanphletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanphletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanphletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
