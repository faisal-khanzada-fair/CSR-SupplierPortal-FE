import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsrConnectHeaderComponent } from './csr-connect-header/csr-connect-header.component';
import { CsrConnectHamburgerButtonComponent } from './csr-connect-hamburger-button/csr-connect-hamburger-button.component';
import { CsrConnectDropdownItemComponent } from './csr-connect-dropdown-item/csr-connect-dropdown-item.component';
import { CsrConnectHeaderButtonComponent } from './csr-connect-header-button/csr-connect-header-button.component';
import { CsrConnectHeaderUtilityButtonComponent } from './csr-connect-header-utility-button/csr-connect-header-utility-button.component';
import { CsrConnectNavBarButtonComponent } from './csr-connect-nav-bar-button/csr-connect-nav-bar-button.component';
import { CsrConnectNavBarDropdownComponent } from './csr-connect-nav-bar-dropdown/csr-connect-nav-bar-dropdown.component';
import { CsrVideoComponent } from './csr-video/csr-video.component';
import { CsrBusinessUnitLogoComponent } from './csr-business-unit-logo/csr-business-unit-logo.component';
import { CsrComponent } from './_template/csr-component.component';



@NgModule({
  declarations: [
    CsrConnectHeaderComponent,
    CsrConnectHamburgerButtonComponent,
    CsrConnectDropdownItemComponent,
    CsrConnectHeaderButtonComponent,
    CsrConnectHeaderUtilityButtonComponent,
    CsrConnectNavBarButtonComponent,
    CsrConnectNavBarDropdownComponent,
    CsrVideoComponent,
    CsrBusinessUnitLogoComponent,
    CsrComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CsrConnectHeaderComponent,
    CsrConnectHamburgerButtonComponent,
    CsrConnectDropdownItemComponent,
    CsrConnectHeaderButtonComponent,
    CsrConnectHeaderUtilityButtonComponent,
    CsrConnectNavBarButtonComponent,
    CsrConnectNavBarDropdownComponent,
    CsrVideoComponent,
    CsrBusinessUnitLogoComponent,
    CsrComponent
  ]
})
export class CSRAngularModule { }
