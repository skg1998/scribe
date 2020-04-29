import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app'; 
import 'firebase/auth';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  
 constructor(private router:Router ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean>|
    Promise<boolean> | boolean {

      return new Promise((resolve,reject)=>{
        resolve(true);
        // firebase.auth().onAuthStateChanged((user)=>{
        //   if(user){
        //     resolve(true);
        //   }else{
        //     this.router.navigate(['/login']);
        //     resolve(false);
        //   }
        // })
      })
    }
  

  
} 
