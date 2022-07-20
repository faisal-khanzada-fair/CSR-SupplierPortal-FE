import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrConnectHamburgerButtonComponent } from './csr-connect-hamburger-button.component';

describe('CsrConnectHamburgerButtonComponent', () => {
  let component: CsrConnectHamburgerButtonComponent;
  let fixture: ComponentFixture<CsrConnectHamburgerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsrConnectHamburgerButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrConnectHamburgerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
