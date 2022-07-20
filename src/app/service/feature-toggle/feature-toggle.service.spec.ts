import {
	HttpClientTestingModule,
	HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { BehaviorSubject, distinctUntilChanged } from "rxjs";
import { WindowRef } from "../../infrastructure/window-ref";
import { AuthenticationService } from "../authentication/authentication.service";
import { FeatureToggleService } from "./feature-toggle.service";

describe("FeatureToggleService", () => {
	let httpTestingController: HttpTestingController;
	let featureToggleService: FeatureToggleService;

	const tokenSubject = new BehaviorSubject("token");
	const token = tokenSubject.asObservable().pipe(distinctUntilChanged());

	let delay: Promise<boolean>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				FeatureToggleService,
				WindowRef,
				{
					provide: AuthenticationService,
					useValue: { csrConnectUserOauthToken$: token },
				},
			],
		});

		featureToggleService = TestBed.inject(FeatureToggleService);
		httpTestingController = TestBed.inject(HttpTestingController);

		const testData: any = {
			success: true,
			msg: null,
			data: {
				experiments: { "1": "Evil experiment 2" },
				toggles: ["Toggle 1", "Toggle 2"],
			},
			error: 0,
		};

		httpTestingController.expectOne(() => true).flush(testData);

		delay = new Promise((resolve) => {
			setTimeout(() => resolve(true), 500);
		});
	});

	it("can subscribe to and receive feature toggle data", (done) => {
		delay.then(() => {
			featureToggleService.featureToggle.subscribe((featureToggle) => {
				expect(JSON.stringify(featureToggle)).toBe(
					JSON.stringify({
						toggles: ["Toggle 1", "Toggle 2"],
					})
				);

				done();
			});
		});
	});
});
