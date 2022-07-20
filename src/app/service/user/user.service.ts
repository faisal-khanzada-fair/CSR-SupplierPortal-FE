import { Injectable } from "@angular/core";
import { BehaviorSubject, distinctUntilChanged, Observable } from "rxjs";
import { UserDefaultAccount } from "./models/user-default-account.model";
import { UserProfile } from "./models/user-profile.model";
import { UserPermission } from "./models/user-permission.model";
import { AuthenticationService } from "../authentication/authentication.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
// import { SystemMessage } from "../../csr-components/infrastructure/system-message";

@Injectable({
	providedIn: "root",
})
export class UserService {
	// User profile observable
	private userProfileSubject = new BehaviorSubject<UserProfile | null>(null);
	public userProfile = this.userProfileSubject
		.asObservable()
		.pipe(distinctUntilChanged());

	// User permissions observable
	private userPermissionsSubject = new BehaviorSubject<UserPermission[]>([]);
	public userPermissions = this.userPermissionsSubject
		.asObservable()
		.pipe(distinctUntilChanged());

	// User default accounts observable
	private userDefaultAccountsSubject = new BehaviorSubject<
		UserDefaultAccount[]
	>([]);
	public userDefaultAccounts = this.userDefaultAccountsSubject
		.asObservable()
		.pipe(distinctUntilChanged());

	constructor(
		private authenticationService: AuthenticationService,
		private httpClient: HttpClient
	) {
		this.subscribeToOAuthToken();
	}

	private subscribeToOAuthToken(): void {
		this.authenticationService.csrConnectUserOauthToken$.subscribe(
			(token) => {
				if (token) {
					this.api_user_get()
				} else {
					this.userProfileSubject.next(null);
					this.userPermissionsSubject.next([]);
					this.userDefaultAccountsSubject.next([]);
				}
			}
		);
	}

	// Will need to be modified (along with the model) as we require more properties in the observable as the the API returns a lot of data that may not get used
	private loadUserProfile(profile: any): void {
		if (!profile) {
			this.userProfileSubject.next(null);
			return;
		}

		this.userProfileSubject.next(
			new UserProfile(
				profile.ProfileType,
				profile.PasswordMustBeChanged,
				profile.AcceptedTermCondOn,
				profile.LoginId,
				profile.UserId,
				profile.EmailAddress,
				profile.FirstName,
				profile.LastName,
				profile.Phone,
				profile.Position,
				profile.CompanyName,
				profile.WindowsId,
				profile.CreatedBy,
				profile.CreatedOn
			) as UserProfile
		);
	}

	private loadUserDefaultAccounts(defaultAccounts: any): void {
		// Once we know exactly which data we need in the observable we can build this (along with the model) as the the API returns a lot of data that may not get used
	}

	private loadUserPermissions(permissions: any): void {
		if (!permissions) {
			this.userPermissionsSubject.next([]);
			return;
		}

		let userPermissions: UserPermission[] = [];

		Object.keys(permissions.customer).forEach((key) => {
			userPermissions.push(
				new UserPermission(
					key,
					permissions.customer[key].Permission,
					permissions.customer[key].Reference
				)
			);
		});

		Object.keys(permissions.inter).forEach((key) => {
			userPermissions.push(
				new UserPermission(
					key,
					permissions.inter[key].Permission,
					permissions.inter[key].Reference
				)
			);
		});

		Object.keys(permissions.supplier).forEach((key) => {
			userPermissions.push(
				new UserPermission(
					key,
					permissions.supplier[key].Permission,
					permissions.supplier[key].Reference
				)
			);
		});

		this.userPermissionsSubject.next(userPermissions);
	}

	private api_user_get() {
	}
}
