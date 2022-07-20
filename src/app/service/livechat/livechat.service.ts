import { Injectable } from "@angular/core";
import { WindowRef } from "../../infrastructure/window-ref";
import { environment } from "../../../environments/environment";
import { UserService } from "../user/user.service";
import { UserProfile } from "../user/models/user-profile.model";

@Injectable({
	providedIn: "root",
})
export class LiveChatService {
	window: any = null;

	constructor(
		private windowRef: WindowRef,
		private userService: UserService
	) {
		this.window = windowRef.nativeWindow;
	}

	loadLiveChat(): void {
		this.addLicense();

		this.addLiveChatScript();

		this.waitForLiveChatToLoad().then(() => {
			this.userService.userProfile.subscribe((userProfile) => {
				this.setupAuthenticatedLiveChat(userProfile);
			});
		});
	}

	addLicense(): void {
		let lc: any = {};
		lc.license = environment.liveChatLicenseCode;
		this.window.__lc = lc;
	}

	addLiveChatScript(): void {
		let lcw = document.createElement("script");
		lcw.type = "text/javascript";
		lcw.async = true;
		lcw.src =
			(location.protocol.includes("https") ? "https://" : "http://") +
			"cdn.livechatinc.com/tracking.js";
		let s = document.getElementsByTagName("script")[0];
		s.parentNode?.insertBefore(lcw, s);
	}

	waitForLiveChatToLoad(): Promise<Boolean> {
		return new Promise((resolve) => {
			let checkLiveChatHasLoaded = () => {
				if (this.windowRef.nativeWindow.LC_API) {
					resolve(true);
				} else {
					setTimeout(checkLiveChatHasLoaded, 500);
				}
			};

			checkLiveChatHasLoaded();
		});
	}

	setupAuthenticatedLiveChat(userProfile: UserProfile | null) {
		let visitor: any = {
			name: "",
			email: "",
		};
		let params: any = [];

		if (userProfile) {
			visitor.name = `${userProfile.firstName} ${userProfile.lastName}`;
			visitor.email = userProfile.emailAddress;

			// Add any custom fields
			params = [
				{ name: "Login Id", value: userProfile.loginId },
				{ name: "User Id", value: userProfile.userId },
				{ name: "Email", value: userProfile.emailAddress },
				{ name: "First Name", value: userProfile.firstName },
				{ name: "Last Name", value: userProfile.lastName },
				{ name: "Phone", value: userProfile.phone },
				{ name: "Position", value: userProfile.position },
				{ name: "Company Name", value: userProfile.companyName },
				{ name: "Profile Type", value: userProfile.profileType },
				{ name: "Windows User Name", value: userProfile.windowsId },
				{ name: "Created By", value: userProfile.createdBy },
				{ name: "Created On", value: userProfile.createdOn },
			];

			this.window.LC_API.update_custom_variables(params);
		}

		this.window.__lc.visitor = visitor;
		this.window.__lc.params = params;

		this.window.LC_API.on_message = (data: any) => {
			// We do this to stop the chat box automatically popping up every time we open the page
			if (
				data.text.indexOf("Can I help you with anything?") > -1 &&
				data.text.indexOf("Welcome back") > -1
			) {
				return;
			}
			this.window.LC_API.open_chat_window();
		};
	}
}
