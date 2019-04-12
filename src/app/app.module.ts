import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserXhr, HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './home/post/post.component';
import { RouterModule } from '@angular/router';
import { IncludePostComponent } from './home/includes/includes-post.component';
import { Bd } from './bd.service';
import { Progress } from './progress.service';
import { UploadComponent } from './upload/upload.component';
import { MediaComponent } from './media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    PostComponent,
    IncludePostComponent,
    UploadComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [httpInterceptorProviders, Bd, Progress],
  bootstrap: [AppComponent]
})
export class AppModule { }
