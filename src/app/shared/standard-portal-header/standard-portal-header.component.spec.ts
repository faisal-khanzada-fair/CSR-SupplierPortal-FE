import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardPortalHeaderComponent } from './standard-portal-header.component';

describe('StandardPortalHeaderComponent', () => {
  let component: StandardPortalHeaderComponent;
  let fixture: ComponentFixture<StandardPortalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardPortalHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardPortalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
