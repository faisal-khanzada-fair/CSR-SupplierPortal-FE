import { Component, Input, OnInit } from "@angular/core";
import { SystemMessage } from "../infrastructure/system-message";

@Component({
  selector: "csr-connect-header-utility-button",
  templateUrl: "./csr-connect-header-utility-button.component.html",
  styleUrls: ["./csr-connect-header-utility-button.component.scss"],
})
export class CsrConnectHeaderUtilityButtonComponent implements OnInit {
  @Input() label: string = "";
  @Input() icon: string = "";
  @Input() onClick: any = null;
  @Input() isLanding: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (!this.inputsValid()) {
      // SystemMessage.invalidConfiguration(this.constructor.name);
    }
  }

  inputsValid(): boolean {
    if (!this.label) {
      // SystemMessage.invalidParameter(
      //   this.constructor.name,
      //   "label",
      //   "Either a label, icon or both must be provided"
      // );
      return false;
    }

    if (!this.icon) {
      // SystemMessage.invalidParameter(
      //   this.constructor.name,
      //   "icon",
      //   "Either a label, icon or both must be provided"
      // );
      return false;
    }

    if (!this.icon.includes("fa-")) {
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
