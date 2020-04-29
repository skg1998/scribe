import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

 import * as firebase from 'firebase/app'; 
 import 'firebase/auth';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ViewComponent } from './view/view.component';
import { environment } from 'src/environments/environment';

let firebaseConfig = {
  apiKey: "AIzaSyAGYJn9_r-142uh5MPaE19dPAdydthraQI",
  authDomain: "scribe-67939.firebaseapp.com",
  databaseURL: "https://scribe-67939.firebaseio.com",
  projectId: "scribe-67939",
  storageBucket: "",
  messagingSenderId: "247797580977",
  appId: "1:247797580977:web:8b37598bc95c0137"
};
//  Initialize Firebase
 firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    CommentsComponent,
    EditProfileComponent,
    ViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
