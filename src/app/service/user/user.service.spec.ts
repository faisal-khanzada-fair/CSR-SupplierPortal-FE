import { UserService } from "./user.service";
import { BehaviorSubject, distinctUntilChanged, of } from "rxjs";
import { TestBed } from "@angular/core/testing";
import {
	HttpClientTestingModule,
	HttpTestingController,
} from "@angular/common/http/testing";
import { AuthenticationService } from "../authentication/authentication.service";

describe("UserService", () => {
	let httpTestingController: HttpTestingController;
	let userService: UserService;
	
	const tokenSubject = new BehaviorSubject("token");
	const token = tokenSubject.asObservable().pipe(distinctUntilChanged());

	let delay: Promise<boolean>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				UserService,
				{
					provide: AuthenticationService,
					useValue: { csrConnectUserOauthToken$: token },
				},
			],
		});

		const testData: any = {
			DefaultAccounts: [{}],
			Permissions: {
				customer: {
					PermissionKey1: { Permission: "crud", Reference: "ref" },
				},
				inter: {
					PermissionKey2: { Permission: "crud", Reference: "ref" },
				},
				supplier: {
					PermissionKey3: { Permission: "crud", Reference: "ref" },
				},
			},
			Profile: {
				ProfileType: 7,
				PasswordMustBeChanged: false,
				AcceptedTermCondOn: "2019-01-16T03:46:21.687+00:00",
				LoginId: "123",
				UserId: "321",
				EmailAddress: "test@man.com",
				FirstName: "Test",
				LastName: "Man",
				Phone: "0412345678",
				Position: "King",
				CompanyName: "Hungry Jacks",
				WindowsId: null,
				CreatedBy: "God",
				CreatedOn: "2019-01-15T23:49:18.7965027+00:00",
			},
		};

		userService = TestBed.inject(UserService);
		httpTestingController = TestBed.inject(HttpTestingController);

		httpTestingController.expectOne(() => true).flush(testData);

		delay = new Promise((resolve) => {
			setTimeout(() => resolve(true), 500);
		});
	});

	it("can subscribe to and receive correct user permissions data", (done) => {
		delay.then(() => {
			userService.userPermissions.subscribe((userPermissions) => {
				expect(JSON.stringify(userPermissions)).toBe(
					JSON.stringify([
						{
							name: "PermissionKey1",
							accessRights: "crud",
							reference: "ref",
						},
						{
							name: "PermissionKey2",
							accessRights: "crud",
							reference: "ref",
						},
						{
							name: "PermissionKey3",
							accessRights: "crud",
							reference: "ref",
						},
					])
				);

				done();
			});
		});
	});

	it("can subscribe to and receive correct user profile data", (done) => {
		delay.then(() => {
			userService.userProfile.subscribe((userProfile) => {
				expect(JSON.stringify(userProfile)).toBe(
					JSON.stringify({
						profileType: 7,
						passwordMustBeChanged: false,
						acceptedTermCondOn: "2019-01-16T03:46:21.687+00:00",
						loginId: "123",
						userId: "321",
						emailAddress: "test@man.com",
						firstName: "Test",
						lastName: "Man",
						phone: "0412345678",
						position: "King",
						companyName: "Hungry Jacks",
						windowsId: null,
						createdBy: "God",
						createdOn: "2019-01-15T23:49:18.7965027+00:00",
					})
				);

				done();
			});
		});
	});
});
