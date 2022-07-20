import { Component, Input, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { SystemMessage } from "../infrastructure/system-message";

@Component({
  selector: "csr-connect-dropdown-item",
  templateUrl: "./csr-connect-dropdown-item.component.html",
  styleUrls: ["./csr-connect-dropdown-item.component.scss"],
})
export class CsrConnectDropdownItemComponent implements OnInit {
  @Input() label: string = "";
  @Input() icon: string = "";
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

  // Highlight if the current url matches the item's href
  checkButtonIsActive(url: string): void {
    if (Boolean(this.href) && url === this.href) {
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
