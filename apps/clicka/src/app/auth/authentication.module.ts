import { NgModule } from '@angular/core';
import {
  MsalModule,
  MsalInterceptor,
  BroadcastService,
} from '@azure/msal-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;
@NgModule({
  declarations: [],
  imports: [
    MsalModule.forRoot(
      {
        auth: {
          clientId: 'ed87ddd2-1919-4dab-8ba0-b8229ec7e5ac', // This is your client ID
          authority: 'https://login.microsoftonline.com/60986552-325e-4e97-bb68-caabb429c678', // This is your tenant ID
          redirectUri: 'http://localhost:4200', // This is your redirect URI
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
        },
      },
      {
        popUp: !isIE,
        consentScopes: ['user.read', 'openid', 'profile'],
        unprotectedResources: [],
        protectedResourceMap: [
          ['https://graph.microsoft.com/v1.0/me', ['user.read']],
        ],
        extraQueryParameters: {},
      }
    ),
  ],
  providers: [
    BroadcastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
  ],
})
export class AuthenticationModule {}
