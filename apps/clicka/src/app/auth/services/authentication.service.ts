import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private broadcastService: BroadcastService,
    private msalAuthService: MsalService,
    private readonly http: HttpClient
  ) {}

  login() {
    console.log('login service');

    const isIE =
      window.navigator.userAgent.indexOf('MSIE ') > -1 ||
      window.navigator.userAgent.indexOf('Trident/') > -1;

    if (isIE) {
      this.msalAuthService.loginRedirect({
        extraScopesToConsent: ['user.read', 'openid', 'profile'],
      });
    } else {
      this.msalAuthService.loginPopup({
        extraScopesToConsent: ['user.read', 'openid', 'profile'],
      });
    }
  }

  getProfile() {
    const graphMeEndpoint = 'https://graph.microsoft.com/v1.0/me';
    return this.http.get(graphMeEndpoint);
  }

  getAppReports() {
    return this.http.get(
      'https://api.powerbi.com/v1.0/myorg/apps/ed87ddd2-1919-4dab-8ba0-b8229ec7e5ac/reports'
    );
  }
}
