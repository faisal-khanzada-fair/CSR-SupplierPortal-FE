import { BehaviorSubject, distinctUntilChanged } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class AuthenticationService {

    // IsAuthenticated observable
    private csrConnectUserIsAuthenticatedSubject = new BehaviorSubject<boolean | false>(false);
    public csrConnectUserIsAuthenticated$ = this.csrConnectUserIsAuthenticatedSubject.asObservable().pipe(distinctUntilChanged());

    // CSR Connect User Oauth Token observable
    private csrConnectUserOAuthTokenSubject = new BehaviorSubject<string | null>(null);
    public get csrConnectUserOauthToken(): string | null { return this.csrConnectUserOAuthTokenSubject.value; }
    public csrConnectUserOauthToken$ = this.csrConnectUserOAuthTokenSubject
        .asObservable()
        .pipe(distinctUntilChanged());

    constructor() {
        //check token change every 5 seconds
        this.watchCsrConnectUserOauthToken(1000);
    }

    private watchCsrConnectUserOauthToken(interval: number): void {

        setInterval(() => {
            var token = this.getCsrConnectUserOauthToken();

            //set token
            if (this.csrConnectUserOAuthTokenSubject.value != token) {
                this.csrConnectUserOAuthTokenSubject.next(token);
            }

            //set isAuthenticated
            if (token && this.csrConnectUserIsAuthenticatedSubject.value == false)
                this.csrConnectUserIsAuthenticatedSubject.next(true);
            else if (!token && this.csrConnectUserIsAuthenticatedSubject.value == true)
                this.csrConnectUserIsAuthenticatedSubject.next(false);

        }, interval);
    }

    private getCsrConnectUserOauthToken(): string | null {

        var connectToken = this.getCookieValue('connectToken');

        //iOS app writes the cookie value with " surrounding the token
        //here we remove it before sending it to the server
        if (connectToken) {
            //remove double quotes from start and end of the token
            if (connectToken.startsWith('"'))
                connectToken = connectToken.substring(1);
            if (connectToken.endsWith('"'))
                connectToken = connectToken.substring(0, connectToken.length - 1);

            if (connectToken.startsWith('%22'))
                connectToken = connectToken.substring(3);
            if (connectToken.endsWith('%22'))
                connectToken = connectToken.substring(0, connectToken.length - 3);

            return connectToken;
        }

        return null;

    }

    //Dan provided this cookie function
    private getCookieValue(key: string): string | null {

        const cookies = document.cookie.split("; ");

        for (var i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].split("=");
            let name = cookie[0];
            let value = cookie[1];
            if (name === key) {
                return value;
            }
        }

        return null;
    }

}
