import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemMessage } from '../infrastructure/system-message';

import { CsrConnectHeaderButtonComponent } from './csr-connect-header-button.component';

describe('CsrConnectHeaderButtonComponent', () => {
  let component: CsrConnectHeaderButtonComponent;
  let fixture: ComponentFixture<CsrConnectHeaderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsrConnectHeaderButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrConnectHeaderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('requires a label to be provided', ()=> {
    spyOn(SystemMessage, "invalidParameter");

    component.label = "";
    var inputIsValid = component.inputsValid();
    fixture.detectChanges();

    expect(inputIsValid).toBe(false);
    expect(SystemMessage.invalidParameter).toHaveBeenCalled();
  });
});
