import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { APP_INITIALIZER } from "@angular/core";
import { TokenProviderService } from './token-provider.service';
import { AppInitService } from './app-init.service';
import { HttpClientModule } from  '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';

export function servicesOnRun(token: TokenProviderService) {
  console.log("servicesOnRun called");
  return () => token.load();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: servicesOnRun,
      multi: true,
      deps: [TokenProviderService]
    }
  ],
  bootstrap: [LoginComponent]
})
export class AppModule { }
