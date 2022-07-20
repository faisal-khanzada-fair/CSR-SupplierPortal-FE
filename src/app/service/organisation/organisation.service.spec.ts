import {
	HttpClientTestingModule,
	HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { BehaviorSubject, distinctUntilChanged } from "rxjs";
import { AuthenticationService } from "../authentication/authentication.service";
import { OrganisationService } from "./organisation.service";

describe("OrganisationService", () => {
	let httpTestingController: HttpTestingController;
	let organisationService: OrganisationService;

	const tokenSubject = new BehaviorSubject("token");
	const token = tokenSubject.asObservable().pipe(distinctUntilChanged());

	let delay: Promise<boolean>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				OrganisationService,
				{
					provide: AuthenticationService,
					useValue: { csrConnectUserOauthToken$: token },
				},
			],
		});

		organisationService = TestBed.inject(OrganisationService);
		httpTestingController = TestBed.inject(HttpTestingController);

		const testData: any = [
			{
				Id: 1,
				Name: "Organisation 1",
				InvalidContacts: 1,
				OutOfDateContacts: 1,
				IncludeInUiCount: 1,
			},
			{
				Id: 2,
				Name: "Organisation 2",
				InvalidContacts: 1,
				OutOfDateContacts: 2,
				IncludeInUiCount: 2,
			},
		];

		httpTestingController.expectOne(() => true).flush(testData);

		delay = new Promise((resolve) => {
			setTimeout(() => resolve(true), 500);
		});
	});

	it("can subscribe to and receive organisations data", (done) => {
		delay.then(() => {
			organisationService.userOrganisations.subscribe((organisations) => {
				expect(JSON.stringify(organisations)).toBe(
					JSON.stringify([
						{
							id: 1,
							name: "Organisation 1",
							invalidContacts: 1,
							outOfDateContacts: 1,
							includeInUiCount: 1,
						},
						{
							id: 2,
							name: "Organisation 2",
							invalidContacts: 1,
							outOfDateContacts: 2,
							includeInUiCount: 2,
						},
					])
				);

				done();
			});
		});
	});
});
