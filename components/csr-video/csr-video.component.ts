import { Component, Input, OnInit } from '@angular/core';
import { CsrComponentScriptLoaderService } from '../infrastructure/csr-component-script-loader-service';
import { SystemMessage } from '../infrastructure/system-message';

declare function loadWistiaVideo(videoId: string, trackingEmail: string): any;

@Component({
  selector: 'app-csr-video',
  templateUrl: './csr-video.component.html',
  styleUrls: ['./csr-video.component.scss']
})
export class CsrVideoComponent implements OnInit {

  //configs
  private scriptLoaderScriptName: string = "wistia_core";

  //inputs
  @Input() type: CsrVideoType = CsrVideoType.Wistia;
  @Input() media: string = "";
  @Input() placeholderImgSrc: string = "";
  @Input() trackingEmail: string = "";

  //expose to front end
  VideoType = CsrVideoType;

  constructor(
    private csrComponentScriptLoaderService: CsrComponentScriptLoaderService
    ) {
  }

  ngOnInit(): void {
    if (!this.inputsValid()) {
      // SystemMessage.invalidConfiguration(this.constructor.name);
    }

    //init
    this.csrComponentScriptLoaderService.load(this.scriptLoaderScriptName);
  }

  playVideo(): void {
    loadWistiaVideo(this.media, this.trackingEmail);
  }

  inputsValid(): boolean {
    if (!(this.type in CsrVideoType)) {
      // SystemMessage.invalidParameter(this.constructor.name, "type", "Accepted values are " + Object.keys(CsrVideoType).filter(k => isNaN(parseInt(k))));
      return false;
    }

    if (!this.media || this.media.length == 0) {
      // SystemMessage.invalidParameter(this.constructor.name, "media", "Must have a value");
      return false;
    }

    return true;
  }

}

export enum CsrVideoType {
  Wistia = 0
}
