// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { Location } from "@angular/common";
// import { SpyLocation } from "@angular/common/testing";
// import { BehaviorSubject, distinctUntilChanged } from "rxjs";
// import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
// import { AuthenticationService } from "../../services/authentication/authentication.service";
// import { OrganisationService } from "../../services/organisation/organisation.service";
// import { UserService } from "../../services/user/user.service";
// import { FeatureToggleService } from "../../services/feature-toggle/feature-toggle.service";
// import { CsrConnectNavBarComponent } from "./csr-connect-nav-bar.component";

// describe("CsrConnectNavBarComponent", () => {
// 	let component: CsrConnectNavBarComponent;
// 	let fixture: ComponentFixture<CsrConnectNavBarComponent>;

// 	const csrConnectUserIsAuthenticatedSubject = new BehaviorSubject(true);
// 	const csrConnectUserIsAuthenticated$ = csrConnectUserIsAuthenticatedSubject
// 		.asObservable()
// 		.pipe(distinctUntilChanged());

// 	const userOrganisationsSubject = new BehaviorSubject(null);
// 	const userOrganisations = userOrganisationsSubject
// 		.asObservable()
// 		.pipe(distinctUntilChanged());

// 	const featureToggleSubject = new BehaviorSubject(null);
// 	const featureToggle = featureToggleSubject
// 		.asObservable()
// 		.pipe(distinctUntilChanged());

// 	const userProfileSubject = new BehaviorSubject(null);
// 	const userProfile = userProfileSubject
// 		.asObservable()
// 		.pipe(distinctUntilChanged());

// 	beforeEach(async () => {
// 		await TestBed.configureTestingModule({
// 			declarations: [CsrConnectNavBarComponent],
// 			providers: [
// 				{
// 					provide: AuthenticationService,
// 					useValue: {
// 						csrConnectUserIsAuthenticated$,
// 					},
// 				},
// 				{
// 					provide: UserService,
// 					useClass: { userProfile },
// 				},
// 				{
// 					provide: FeatureToggleService,
// 					useValue: { featureToggle },
// 				},
// 				{
// 					provide: OrganisationService,
// 					useValue: { userOrganisations },
// 				},
// 				{ provide: Location, useClass: SpyLocation },
// 			],
// 			schemas: [CUSTOM_ELEMENTS_SCHEMA],
// 		}).compileComponents();
// 	});

// 	beforeEach(() => {
// 		fixture = TestBed.createComponent(CsrConnectNavBarComponent);
// 		component = fixture.componentInstance;
// 		fixture.detectChanges();
// 	});

// 	it("should create", () => {
// 		expect(component).toBeTruthy();
// 	});
// });
