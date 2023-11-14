import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentUser: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('useremail');
    console.log(this.currentUser);
  }

  // Method to redirect to Create Profile
  redirectToCreateProfile(): void {
    this.router.navigate(['/create-profile']);
  }
}

