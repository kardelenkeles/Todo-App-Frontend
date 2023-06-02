import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";
import {ErrorComponent} from "./error/error.component";
import {ListTodosComponent} from "./list-todos/list-todos.component";
import {MenuComponent} from "./menu/menu.component";
import {FooterComponent} from "./footer/footer.component";
import {LogoutComponent} from "./logout/logout.component";
import {RouteGuardService} from "./service/route-guard.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
