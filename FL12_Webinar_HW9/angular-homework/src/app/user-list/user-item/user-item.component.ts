import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit { 
  
  @Output() deleteUser = new EventEmitter<number>();
  @Output() editUser = new EventEmitter<object>();
  @Output() getUserId = new EventEmitter<number>();
  @Input() public user;

  edited:boolean = false;

  editForm = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required)
  });

  constructor() { }
  
  ngOnInit() {
  }

  edit() {
    this.edited = true;
  }
  discard() {
    this.edited = false;
  }

  share() {
    
    this.getUserId.emit(this.user.id);
  }

  save() {     
    this.editForm.setValue(this.editForm.value);
    
    this.editUser.emit(this.editForm.value);
    this.edited = false;
  }

  delUser() {    
    this.deleteUser.emit(this.user.id);
  }
}
