import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrNavComponent } from './csr-nav.component';

describe('CsrNavComponent', () => {
  let component: CsrNavComponent;
  let fixture: ComponentFixture<CsrNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsrNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
