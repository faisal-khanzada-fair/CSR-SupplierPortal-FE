import { Component, ElementRef, Input, OnInit, AfterContentChecked } from "@angular/core";
import { Location } from "@angular/common";
import { SystemMessage } from "../infrastructure/system-message";

@Component({
  selector: "csr-connect-nav-bar-dropdown",
  templateUrl: "./csr-connect-nav-bar-dropdown.component.html",
  styleUrls: ["./csr-connect-nav-bar-dropdown.component.scss"],
})
export class CsrConnectNavBarDropdownComponent implements OnInit, AfterContentChecked {
  @Input() label: string = "";
  @Input() icon: string = "";
  @Input() showNewTag: boolean = false;

  isActive: boolean = false;
  shouldDisable: boolean = false;

  constructor(private elementRef: ElementRef, private location: Location) {
    this.listenToUrlChange();
  }

  ngOnInit(): void {
    if (!this.inputsValid()) {
      // SystemMessage.invalidConfiguration(this.constructor.name);
    }
  }

  // Due to the the use of ng-content/transclusion, it takes a while until this component can see the proper DOM
  // So if we need to run anything that relies on the DOM, we need to use this hook
  ngAfterContentChecked() {
    this.checkShouldDisable();
  }

  listenToUrlChange(): void {
    this.location.onUrlChange(() => {
      this.checkHasActiveChild();
    });
  }

  checkShouldDisable() {
    this.shouldDisable = !Boolean(
      this.elementRef.nativeElement.getElementsByClassName("csr-connect-dropdown-item")
        .length
    );
  }

  // Highlight if one of our child items is active
  checkHasActiveChild(): void {
    let hasActiveChildButton =
      this.elementRef.nativeElement
        .querySelector(".dropdown-menu")
        ?.getElementsByClassName("active").length > 0;

    if (hasActiveChildButton) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }

  inputsValid(): boolean {
    if (!this.label && !this.icon) {
      // SystemMessage.invalidParameter(
      //   this.constructor.name,
      //   "label",
      //   "Either a label, icon or both must be provided"
      // );
      // SystemMessage.invalidParameter(
      //   this.constructor.name,
      //   "icon",
      //   "Either a label, icon or both must be provided"
      // );
      return false;
    }

    if (Boolean(this.icon) && !this.icon.includes("fa-")) {
      // SystemMessage.invalidParameter(
      //   this.constructor.name,
      //   "icon",
      //   "Icon must be a valid Font Awesome icon. Example: 'fa-caret-down'"
      // );
      return false;
    }

    return true;
  }
}
