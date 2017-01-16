import { AppComponent } from './app.component';
import { AuthGard } from './auth.guard';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownDirective } from './header/dropdown.directive';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './history/history.component';
import { HistoryItemComponent } from './history/history-item/history-item.component';
import { HomeComponent } from './home/home.component';
import { HttpErrorPipe } from './http-error.pipe';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecargasService } from './recargas.service';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { appRouting } from './app.routing';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    HistoryComponent,
    HistoryItemComponent,
    HttpErrorPipe,
    SignupComponent,
    WelcomeComponent,
    DropdownDirective,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    appRouting
  ],
  providers: [
    RecargasService,
    AuthService,
    AuthGard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
