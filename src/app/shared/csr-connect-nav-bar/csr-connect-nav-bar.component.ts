import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UserProfile } from '../../service/user/models/user-profile.model';
import { AuthenticationService } from '../../service/authentication/authentication.service';
import { FeatureToggleService } from '../../service/feature-toggle/feature-toggle.service';
import { FeatureToggle } from '../../service/feature-toggle/models/feature-toggle.model';
import { Organisation } from '../../service/organisation/models/organisation.model';
import { OrganisationService } from '../../service/organisation/organisation.service';
import { UserService } from '../../service/user/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'csr-connect-nav-bar',
  templateUrl: './csr-connect-nav-bar.component.html',
  styleUrls: ['./csr-connect-nav-bar.component.scss']
})
export class CsrConnectNavBarComponent implements OnInit {

  //////
  // Scoped variables
  //////
  isLanding: boolean = false;
  isUserAuthenticated: boolean = false;
  organisations: Organisation[] | null = null;
  userProfile_RequiresPasswordChange: boolean = false;
  userProfile_FirstTimeUser: boolean = false;
  user_featureToggle730: boolean = false; //TODO: move to directive when available

  constructor(private authenticationService: AuthenticationService,
    private organisationService: OrganisationService,
    private userService: UserService,
    private featureToggleService: FeatureToggleService,
    private locationService: Location) {
  }

  ngOnInit(): void {
    this.subscribeToEvents();
    this.subscribeToData();
    // this.determineIsLanding();
  }

  //////
  // Event Handlers
  //////
  ordersApiLinkOnClick(): void {

    var connectToken = this.authenticationService.csrConnectUserOauthToken;

    if (connectToken) {
      // var target = environment.connectApiEndpoint + "/ConnectApi/ui/index?access_token=" + this.authenticationService.csrConnectUserOauthToken;
      // window.location.href = target;
    }
  }

  //////
  // Methods
  //////
  private subscribeToEvents() {
    //subscribe to url change
    this.locationService.onUrlChange((url => {
      // this.determineIsLanding();
    }));
  }

  private subscribeToData(): void {

    //isAuthenticated
    this.authenticationService.csrConnectUserIsAuthenticated$.subscribe((isAuthenticated: boolean) => {
      this.isUserAuthenticated = isAuthenticated;
    });

    //user organisations
    this.organisationService.userOrganisations.subscribe((organisations: Organisation[] | null) => {
      this.organisations = organisations;
    });

    //user profile    
    this.userService.userProfile.subscribe((userProfile: UserProfile | null) => {
      this.userProfile_RequiresPasswordChange = userProfile == null ? false : userProfile.passwordMustBeChanged;
      this.userProfile_FirstTimeUser = userProfile == null ? false : (userProfile.acceptedTermCondOn == null || userProfile.acceptedTermCondOn == false);
    });

    //feature toggle
    this.featureToggleService.featureToggle.subscribe((featureToggle: FeatureToggle | null) => {
      if (featureToggle == null) {
        this.user_featureToggle730 = false;
      }
      else {
        var feature730 = featureToggle.toggles.find((toggle: string) => toggle === "730");
        if (feature730 != null && feature730.length > 0)
          this.user_featureToggle730 = true;
        else
          this.user_featureToggle730 = false;
      }
    });

  }

  // private determineIsLanding(): void {
  //   //determine if current route "isLanding"
  //   var currentHashRoute = window.location.hash.toLowerCase();

  //   var anyHasRouteMatches = false;

  //   if (currentHashRoute == '') //home page
  //     anyHasRouteMatches = true;
  //   else {
  //     for (var i = 0; i < this.isLandingRoutes.length; i++) {
  //       if (currentHashRoute.indexOf(this.isLandingRoutes[i].toLowerCase()) >= 0) {
  //         anyHasRouteMatches = true;
  //         break;
  //       }
  //     }
  //   }
  //   this.isLanding = anyHasRouteMatches;
  // }

  //if current route matches any of the route below, the current route will be considered "isLanding"
  private isLandingRoutes: string[] = [
    "/login",
    "/logout",
    "/forgot-password",
    "/forgot-username",
    "/passwordreset",
    "/components?experimentsDebug",
    "/features",
    "/more-info",
    "/home",
    "/disclaimer",
    "/promo/",
    "/sign-up",
    "/apply-for-csr-account",
    "/registerterms",
    "/remind-me-later",
    "/thankyou"
  ];

}
