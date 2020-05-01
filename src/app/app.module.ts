import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { NvbarComponent } from './home/nvbar/nvbar.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {Ng2Webstorage} from 'ngx-webstorage';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import {EditorModule} from '@tinymce/tinymce-angular';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'addPost', component: BlogComponent },
  { path: 'blogs', component: LoginComponent},
  { path: 'registerSuccess', component: RegisterSuccessComponent },
  { path: 'Get Started', component: RegisterComponent }
] ;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    NvbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    RegisterSuccessComponent,
  ],
    imports: [
        BrowserModule,
      EditorModule,
        RouterModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        Ng2Webstorage.forRoot(),
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
