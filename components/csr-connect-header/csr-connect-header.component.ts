import { Component, OnInit } from "@angular/core";
import { UserService } from "../../src/app/service/user/user.service";
// import { LiveChatService } from "../../../services/";

@Component({
  selector: "csr-connect-header",
  templateUrl: "./csr-connect-header.component.html",
  styleUrls: ["./csr-connect-header.component.scss"],
})

export class CsrConnectHeaderComponent implements OnInit {
  isFirstTimeUser: boolean = false;

  constructor(
    private userService: UserService,
    // private liveChatService: LiveChatService,
  ) {
    // this.liveChatService.loadLiveChat();
  }

  ngOnInit(): void {
    this.subscribeToData();
  }

  subscribeToData() {
    this.userService.userProfile.subscribe((userProfile) => {
      this.isFirstTimeUser =
        userProfile == null
          ? false
          : userProfile.acceptedTermCondOn == null ||
            userProfile.acceptedTermCondOn == false;
    });
  }

}
