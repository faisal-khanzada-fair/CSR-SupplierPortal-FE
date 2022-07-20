import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppConfiguration } from '../../src/app/config/app-configuration';
import { SystemMessage } from '../infrastructure/system-message';

@Component({
  selector: 'csr-business-unit-logo',
  templateUrl: './csr-business-unit-logo.component.html',
  styleUrls: ['./csr-business-unit-logo.component.scss']
})
export class CsrBusinessUnitLogoComponent implements OnInit, OnChanges {

  //////
  // Variables
  //////
  imageAlt: string = "";
  imageSrc: string = "";
  imageSizeClass: string = "";

  //////
  // Inputs
  //////
  @Input() sbuCode: string = "";
  @Input() size: string = "small";

  //////
  /// Events
  /////
  constructor(private appConfiguration: AppConfiguration) {
  }

  ngOnInit(): void {
    //validation
    if (!this.inputsValid()) {
      // SystemMessage.invalidConfiguration(this.constructor.name);
      return;
    }

    //update business logo
    // this.setBusinessLogo(
    //   this.size,
    //   this.sbuCode,
    //   this.appConfiguration.awsPublicAssetsLocation + this.getSbuLogoPath(this.sbuCode)
    // );
  }

  ngOnChanges(changes: SimpleChanges) {
    //act only if any changes are detected from inputs
    if (changes["sbuCode"].previousValue != changes["sbuCode"].currentValue
      || changes["size"].previousValue != changes["size"].currentValue) {
      // this.setBusinessLogo(
      //   this.size,
      //   this.sbuCode,
      //   this.appConfiguration.awsPublicAssetsLocation + this.getSbuLogoPath(this.sbuCode)
      // );
    }
  }

  //////
  // Methods
  //////
  // private setBusinessLogo(imageSizeClass: string, imageAlt: string, imageSrc: string): void {
  //   this.imageSizeClass = imageSizeClass;
  //   this.imageAlt = imageAlt;
  //   this.imageSrc = imageSrc;
  // }

  private getSbuLogoPath(sbuCode: string): string {
    return "assets/img/logos/logo-bu-" + sbuCode.toString().substring(0, 3) + ".png";
  }

  private inputsValid(): boolean {
    let acceptedSizes = ["small", "medium", "large", "xlarge"];
    if (!acceptedSizes.includes(this.size)) {
      // SystemMessage.invalidParameter(this.constructor.name, "size", "Accepted values are " + acceptedSizes);
      return false;
    }

    let acceptedSbuCodes = ["4100", "4110", "4200", "4210", "4220", "4300", "4310", "4315", "4400", "4410", "4500", "4510", "4800", "4900"];
    if (!acceptedSbuCodes.includes(this.sbuCode)) {
      // SystemMessage.invalidParameter(this.constructor.name, "sbuCode", "Accepted values are " + acceptedSbuCodes);
      return false;
    }

    return true;
  }

}
