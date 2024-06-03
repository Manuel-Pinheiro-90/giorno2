import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isLoggedIn:boolean = false

  constructor(
    private router:Router
  ) { }

  login(){

    this.isLoggedIn = true;
    this.router.navigate(['/'])
  }










  }


