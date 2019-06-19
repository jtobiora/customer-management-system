import { User } from '../model/user.model';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService,private toastr: ToastrService) { }

  addForm: FormGroup;

   customer: User = {
       id: 0,
       firstName: '',
       lastName: '',
       email: '',
       phoneNumber: '',
       address: ''   
   }
      
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', [Validators.required,Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  showSuccess(){  
      this.toastr.success("New Customer has been successfully added.",'Success')  
  }


  onSubmit() {
    this.userService.addCustomer(this.addForm.value)
      .subscribe( 
        data => {
        this.showSuccess();
        this.router.navigate(['list-customer']);
      },
      err => {
          alert('Error ocurred while processing data')
      }
    );

  }

}
