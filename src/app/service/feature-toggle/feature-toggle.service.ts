import { Injectable } from "@angular/core";
import { BehaviorSubject, distinctUntilChanged, map, Observable } from "rxjs";
import { FeatureToggle } from "./models/feature-toggle.model";
import { AuthenticationService } from "./../authentication/authentication.service";
import { environment } from "../../../environments/environment";
import { CsrApiResult } from "../../model/csr-api-result";
import { HttpClient } from "@angular/common/http";
import { SystemMessage } from "../../../../components/CSR.AngularComponents/infrastructure/system-message";

@Injectable({
	providedIn: "root",
})
export class FeatureToggleService {
	// Feature Toggles observable
	private featureToggleSubject = new BehaviorSubject<FeatureToggle | null>(
		null
	);
	public featureToggle = this.featureToggleSubject
		.asObservable()
		.pipe(distinctUntilChanged());

	constructor(
		private authenticationService: AuthenticationService,
		private http: HttpClient
	) {
		this.subscribeToData();
	}

	//////
	// Events
	//////
	onOauthTokenChange(token: string | null): void {
		var anonymousId = null;

		// if (!token)
		// 	anonymousId = this.windowRef.nativeWindow.analytics
		// 		.user()
		// 		.anonymousId();

		// this.getFeatureToggles(null, anonymousId);
	}

	//////
	// Methods
	//////
	private subscribeToData(): void {
		// subsribe to the oauth token change
		this.authenticationService.csrConnectUserOauthToken$.subscribe(
			(token: string | null) => {
				this.onOauthTokenChange(token);
			}
		);
	}

	private getFeatureToggles(
		liteLink: string | null,
		anonymousUserId: string | null
	) {
		var queryParams: string[] = [];

		if (liteLink) queryParams.push("liteLink=" + liteLink);

		if (anonymousUserId) queryParams.push("anonymousId=" + anonymousUserId);

		this.api_featureToggles_get(queryParams).subscribe({
			next: (response) => {
				this.featureToggleSubject.next(response.data);
			},
			error: (error) => {
				// SystemMessage.applicationError(
				// 	this.constructor.name,
				// 	JSON.stringify(error)
				// );
			},
		});
	}

	private api_featureToggles_get(
		queryParams: string[]
	): Observable<CsrApiResult<FeatureToggle>> {
		var featureTogglesUrl = "/api/features";

		return this.http
			.get(
				featureTogglesUrl +
					(queryParams.length > 0 ? "?" + queryParams.join("&") : "")
			)
			.pipe(
				map((result: any) => {
					
					let featureToggleBody = new FeatureToggle(
						result.data.toggles
					);

					let csrApiResult = new CsrApiResult<FeatureToggle>(
						result.success,
						result.msg,
						featureToggleBody,
						result.error
					);

					return csrApiResult;
				})
			);
	}
}
