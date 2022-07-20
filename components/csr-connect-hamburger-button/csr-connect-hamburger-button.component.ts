import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "csr-connect-hamburger-button",
  templateUrl: "./csr-connect-hamburger-button.component.html",
  styleUrls: ["./csr-connect-hamburger-button.component.scss"],
})
export class CsrConnectHamburgerButtonComponent implements OnInit {
  navOpen: boolean = false;
  navOpenClass: string = "nav-open";
  targetElements: any = {};

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.targetElements = {
      navElement: document.querySelector("#nav"),
      viewportElement: document.querySelector("#viewport"),
      mainElement: document.querySelector("#main"),
      headerElement: document.querySelector("#header"),
      footerElement: document.querySelector("#footer"),
    };

    this.addListeners();
  }

  removeClasses(elements: any): void {
    if (this.navOpen) {
      Object.keys(elements).forEach((element: string) => {
        elements[element]?.classList.remove(this.navOpenClass);
      });
      this.navOpen = false;
    }
  }

  toggleSlidingNav(): void {
    Object.keys(this.targetElements).forEach((element: string) => {
      this.targetElements[element]?.classList.toggle(this.navOpenClass);
    });
    this.navOpen = !this.navOpen;
  }

  addListeners(): void {
    this.targetElements.mainElement?.addEventListener("click", () => {
      this.removeClasses(this.targetElements);
    });

    this.location.onUrlChange(() => {
      this.removeClasses(this.targetElements);
    });

    window.addEventListener("resize", () => {
      this.removeClasses(this.targetElements);
    });
  }
}
