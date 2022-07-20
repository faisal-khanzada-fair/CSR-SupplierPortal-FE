import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemMessage } from '../infrastructure/system-message';

import { CsrConnectHeaderUtilityButtonComponent } from './csr-connect-header-utility-button.component';

describe('CsrConnectHeaderUtilityButtonComponent', () => {
  let component: CsrConnectHeaderUtilityButtonComponent;
  let fixture: ComponentFixture<CsrConnectHeaderUtilityButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsrConnectHeaderUtilityButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrConnectHeaderUtilityButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('requires both an icon and label to be provided', ()=> {
    spyOn(SystemMessage, "invalidParameter");

    component.icon = "";
    component.label = "Label";
    var inputIsValid = component.inputsValid();
    fixture.detectChanges();

    expect(inputIsValid).toBe(false);
    expect(SystemMessage.invalidParameter).toHaveBeenCalled();

    component.icon = "fa-comments";
    component.label = "";
    var inputIsValid = component.inputsValid();
    fixture.detectChanges();

    expect(inputIsValid).toBe(false);
    expect(SystemMessage.invalidParameter).toHaveBeenCalled();
  });

  it('requires the icon string to be a Font Awesome class', ()=> {
    //let jasmine know our love for invalidParameter
    spyOn(SystemMessage, "invalidParameter");

    component.label = "Label"
    component.icon = "not a valid icon";
    var inputIsValid = component.inputsValid();
    fixture.detectChanges();

    expect(inputIsValid).toBe(false);
    expect(SystemMessage.invalidParameter).toHaveBeenCalled();
  });
});
