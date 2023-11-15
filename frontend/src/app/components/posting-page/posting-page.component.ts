import { Component } from '@angular/core';

@Component({
  selector: 'app-posting-page',
  templateUrl: './posting-page.component.html',
  styleUrls: ['./posting-page.component.css']
})
export class PostingPageComponent {
  public apply=0;
  title: string = "Enter Job Title";
  supervisor: string = "";
  jobtype: string = "";
  department: string = "";
  hours: string = "";
  stipend: string = "";
  public form=0;

  applications(){
    this.apply=0;
    console.log(this.apply);
  }
  applied(){
    this.apply=1;
    console.log(this.apply);
  }

  onSubmit(){
    this.form=0;
  }

  addPost(){
    this.form=1;
  }
}
