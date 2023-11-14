import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

interface Dep {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})

export class DropdownComponent {
  deps: Dep[] = [
    {value: 'SOE', viewValue: 'School of Engineering'},
    {value: 'SHSS', viewValue: 'SHSS'},
    {value: 'DES', viewValue: 'Design'},
  ];
}
