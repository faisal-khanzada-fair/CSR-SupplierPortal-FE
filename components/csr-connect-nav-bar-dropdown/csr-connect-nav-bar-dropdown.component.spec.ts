import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SystemMessage } from "../infrastructure/system-message";

import { CsrConnectNavBarDropdownComponent } from "./csr-connect-nav-bar-dropdown.component";

describe("CsrConnectNavBarDropdownComponent", () => {
  let component: CsrConnectNavBarDropdownComponent;
  let fixture: ComponentFixture<CsrConnectNavBarDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsrConnectNavBarDropdownComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrConnectNavBarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("requires either an icon or label to be provided", () => {
    spyOn(SystemMessage, "invalidParameter");

    component.icon = "";
    component.label = "";
    var inputIsValid = component.inputsValid();
    fixture.detectChanges();

    expect(inputIsValid).toBe(false);
    expect(SystemMessage.invalidParameter).toHaveBeenCalled();
  });

  it("requires the icon string to be a Font Awesome class", () => {
    //let jasmine know our love for invalidParameter
    spyOn(SystemMessage, "invalidParameter");

    component.label = "Label";
    component.icon = "not a valid icon";
    var inputIsValid = component.inputsValid();
    fixture.detectChanges();

    expect(inputIsValid).toBe(false);
    expect(SystemMessage.invalidParameter).toHaveBeenCalled();
  });
});
