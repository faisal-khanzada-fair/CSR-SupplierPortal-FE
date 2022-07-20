import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardPortalFooterComponent } from './standard-portal-footer.component';

describe('StandardPortalFooterComponent', () => {
  let component: StandardPortalFooterComponent;
  let fixture: ComponentFixture<StandardPortalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardPortalFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardPortalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
