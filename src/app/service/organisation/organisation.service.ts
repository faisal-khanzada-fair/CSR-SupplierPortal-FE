import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, distinctUntilChanged, map, Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { AuthenticationService } from "../authentication/authentication.service";
import { Organisation } from "./models/organisation.model";

@Injectable({
	providedIn: "root",
})
export class OrganisationService {
	private userOrganisationsSubject = new BehaviorSubject<
		Organisation[] | null
	>(null);
	public userOrganisations = this.userOrganisationsSubject
		.asObservable()
		.pipe(distinctUntilChanged());

	constructor(
		private authenticationService: AuthenticationService,
		private http: HttpClient
	) {
		this.watchCsrConnectOauthToken();
	}

	//////
	// Methods
	//////
	private watchCsrConnectOauthToken(): void {
		this.authenticationService.csrConnectUserOauthToken$.subscribe(
			(token) => {
				if (token) {
					// this.api_organisations_get().subscribe({
					// 	next: (response) => {
					// 		this.userOrganisationsSubject.next(response);
					// 	},
					// 	error: (error) => {
					// 		SystemMessage.applicationError(
					// 			this.constructor.name,
					// 			JSON.stringify(error)
					// 		);
					// 	},
					// });
				} else {
					this.userOrganisationsSubject.next(null);
				}
			}
		);
	}

	//////
	// API Clients
	//////
	private api_organisations_get() {
		// var apiEndpoint =
		// 	environment.connectApiEndpoint + "/api/contacts/organisations";

		// return this.http.get(apiEndpoint).pipe(
		// 	map((result: any) => {
		// 		let organisations: Organisation[] = [];

		// 		result.forEach((org: any) => {
		// 			organisations.push(
		// 				new Organisation(
		// 					org.Id,
		// 					org.Name,
		// 					org.InvalidContacts,
		// 					org.OutOfDateContacts,
		// 					org.IncludeInUiCount
		// 				)
		// 			);
		// 		});

		// 		return organisations;
		// 	})
		// );
	}
}
