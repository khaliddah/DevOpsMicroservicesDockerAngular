import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { NvbarComponent } from './home/nvbar/nvbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Write', component: BlogComponent },
  { path: 'blogs', component: LoginComponent},
  { path: 'Get Started', component: RegisterComponent}
] ;



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    NvbarComponent,
    LoginComponent,
    RegisterComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
