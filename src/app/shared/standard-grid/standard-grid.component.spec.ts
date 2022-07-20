import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardGridComponent } from './standard-grid.component';

describe('StandardGridComponent', () => {
  let component: StandardGridComponent;
  let fixture: ComponentFixture<StandardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
