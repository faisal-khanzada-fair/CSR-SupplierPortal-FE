import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppConfiguration } from '../../config/app-configuration';
import { SystemMessage } from '../infrastructure/system-message';
import { CsrBusinessUnitLogoComponent } from './csr-business-unit-logo.component';

describe('CsrBusinessUnitLogoComponent', () => {
  let component: CsrBusinessUnitLogoComponent;
  let fixture: ComponentFixture<CsrBusinessUnitLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsrBusinessUnitLogoComponent ],
      providers: [ AppConfiguration ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrBusinessUnitLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Input "size" invalid  to return error', ()=> {
    spyOn(SystemMessage, "invalidParameter");

    component.sbuCode = "4100";
    component.size = "not a proper size";
    var inputIsValid = component["inputsValid"]();
    fixture.detectChanges();

    expect(inputIsValid).toBe(false);
    expect(SystemMessage.invalidParameter).toHaveBeenCalled();
  });

  it('Input "sbuCode" invalid to return error', ()=> {
    spyOn(SystemMessage, "invalidParameter");

    component.sbuCode = "9999";
    component.size = "small";
    var inputIsValid = component["inputsValid"]();
    fixture.detectChanges();

    expect(inputIsValid).toBe(false);
    expect(SystemMessage.invalidParameter).toHaveBeenCalled();
  });

});
