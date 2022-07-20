
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-loading-message',
  templateUrl: './page-loading-message.html',
})
export class PageLoadingMessage implements OnInit {
    message:string= "";
    @Input()
      set loadingMessage(message: string) {
          this.message = message.toUpperCase();
      }
      get loadingMessage(): string {
          return this.message;
      }

      ngOnInit(): void {
      }
}
