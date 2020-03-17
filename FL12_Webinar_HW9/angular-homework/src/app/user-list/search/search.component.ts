import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() save = new EventEmitter<object>();

  addUserForm:boolean = false;

  addForm = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }
  addUser() {
    this.addUserForm = true
  }
  discard() {
    this.addUserForm = false;
  }
  saveUser() {
    this.save.emit(this.addForm.value);
    this.addForm.reset();
    this.addUserForm = false;
  }
}
