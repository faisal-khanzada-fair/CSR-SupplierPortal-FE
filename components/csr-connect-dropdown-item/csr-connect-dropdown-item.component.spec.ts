import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from "@angular/common";
import { SpyLocation } from "@angular/common/testing";
import { SystemMessage } from '../infrastructure/system-message';
import { CsrConnectDropdownItemComponent } from './csr-connect-dropdown-item.component';


describe('CsrConnectDropdownItemComponent', () => {
  let component: CsrConnectDropdownItemComponent;
  let fixture: ComponentFixture<CsrConnectDropdownItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       declarations: [ CsrConnectDropdownItemComponent ],
       providers: [ 
         { provide: Location, useClass: SpyLocation}
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrConnectDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('requires either an icon or label to be provided', ()=> {
    spyOn(SystemMessage, "invalidParameter");

    component.icon = "";
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
