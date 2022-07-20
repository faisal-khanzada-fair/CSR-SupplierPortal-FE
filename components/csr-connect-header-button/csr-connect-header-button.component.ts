import { Component, Input, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { SystemMessage } from "../infrastructure/system-message";

@Component({
  selector: "csr-connect-header-button",
  templateUrl: "./csr-connect-header-button.component.html",
  styleUrls: ["./csr-connect-header-button.component.scss"],
})
export class CsrConnectHeaderButtonComponent implements OnInit {
  @Input() label: string = "";
  @Input() href: string = "";
  @Input() target: string | null = null;
  @Input() showNewTag: boolean = false;

  isActive: boolean = false;

  constructor(private location: Location) {
    this.listenToUrlChange();
  }

  ngOnInit(): void {
    if (!this.inputsValid()) {
      // SystemMessage.invalidConfiguration(this.constructor.name);
    }
  }

  listenToUrlChange(): void {
    this.location.onUrlChange((url) => {
      this.checkButtonIsActive(url);
    });
  }

  // Highlight  if the current url matches the item's href
  checkButtonIsActive(url: string): void {
    if (Boolean(this.href) && url === this.href) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }

  inputsValid(): boolean {
    if (!this.label) {
      // SystemMessage.invalidParameter(
      //   this.constructor.name,
      //   "label",
      //   "A label must be provided"
      // );
      return false;
    }

    return true;
  }
}
