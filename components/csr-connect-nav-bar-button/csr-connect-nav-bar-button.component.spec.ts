import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { Location } from "@angular/common";
import { SpyLocation } from "@angular/common/testing";
import { SystemMessage } from '../infrastructure/system-message';
import { CsrConnectNavBarButtonComponent } from './csr-connect-nav-bar-button.component';


describe('CsrConnectNavBarButtonComponent', () => {
  let component: CsrConnectNavBarButtonComponent;
  let fixture: ComponentFixture<CsrConnectNavBarButtonComponent>;

  const mockElementRef: any = {
    nativeElement: {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       declarations: [ CsrConnectNavBarButtonComponent ],
       providers: [ 
         { provide: ElementRef, useValue: mockElementRef },
         { provide: Location, useClass: SpyLocation}
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrConnectNavBarButtonComponent);
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
