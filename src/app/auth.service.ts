import { Injectable } from '@angular/core';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';

import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public angularFireAuth : AngularFireAuth,
    public router : Router
  ) { 
    this.angularFireAuth.authState.subscribe(userResponse => {
      if (userResponse) {
        localStorage.setItem('user', JSON.stringify(userResponse));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  login( email:string ,password:string){

    return this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
  }

  signup(email:string ,password:string,firstName:string ,lastName:string){
    return new Promise((resolve,reject)=>{

      this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password).then((response)=>{


        let randomNumber = Math.floor(Math.random()*1000)

      response.user.updateProfile({
        displayName:firstName+" "+ lastName,
        photoURL:"https://api.adorable.io/avatars/1234" + randomNumber
    
      }).then(()=>{
        console.log(response);
         resolve(response.user );
      }).catch((error)=>{
        reject(error);
      })
    }).catch((error)=>{
      reject(error);
    })
  })

 }
}
