import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentUser: any;
  constructor() {
  };
  ngOnInit(): void {
    this.currentUser = localStorage.getItem('useremail');
    console.log(this.currentUser)
  }
}
