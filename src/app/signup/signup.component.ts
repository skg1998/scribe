import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup ,FormControl , Validators } from '@angular/forms';
 import * as firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 import { AuthService } from '../auth.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm : FormGroup;
  message:string="";
  userError:any;

  constructor(public fb:FormBuilder , public authService:AuthService) {

    this.myForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmpassword:['',[Validators.required]]

    },{
      validators:this.checkIfMatchingPasswords("password","confirmpassword")
    })
    
   
   }
   checkIfMatchingPasswords(passwordKey:string,confirmPasswordKey:string){
       return (group:FormGroup)=>{
         let password = group.controls[passwordKey];
         let confirmpassword= group.controls[confirmPasswordKey];
         
         if(password.value == confirmpassword.value){
           return;
         }else{
           confirmpassword.setErrors({
             notEqualToPassword:true
           })
         }
       }
  }

   onSubmit(signupform: { value: { email: string; password: string; firstName: string; lastName: string; firstname:any; lastname:any;
       };
    }){
    let email:string=signupform.value.email;
    let password :string=signupform.value.password;
    let firstName:string = signupform.value.firstName;
   let lastName :string= signupform.value.lastName;

     this.authService.signup(email,password ,firstName,lastName)
    .then((user:any)=>{

      console.log(user);
       firebase.firestore().collection("users").doc(user.uid)
        .set({
          firstName : signupform.value.firstname,
          lastName : signupform.value.lastname,
          email : signupform.value.email,
          // photoURL: user.photoURL,
          // interest:"",
          // bio:"",
          // hobbies:""
        }).then(()=>{

          this.message ="You have been Signed Up successfully.Please Login"

        })

    }).catch((error)=>{
      console.log(error);
      this.userError = error;
      //this.myForm.reset();
    })
    
  }

  ngOnInit() {
  }

}
