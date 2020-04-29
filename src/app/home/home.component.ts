import { Component, OnInit } from '@angular/core';
import * as FireBase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Array<any>;
  constructor(
    // public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.firebaseService.getUsers()
    // .subscribe(result => {
    //   this.items = result;
    // })
  }

}
