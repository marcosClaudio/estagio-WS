import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeProductComponent } from './visualize-product.component';

describe('VisualizeProductComponent', () => {
  let component: VisualizeProductComponent;
  let fixture: ComponentFixture<VisualizeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
