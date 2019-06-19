import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../model/user.model";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  closeResult: string;
  users: User[];
  customer: User;
  flag : boolean = false;
  constructor(private router: Router, private userService: UserService,private toastr: ToastrService) { }

  ngOnInit() {
    this.flag = true;
    this.userService.getCustomers()
      .subscribe( data => {
        this.users = data;
      });
  }

  deleteCustomer(user: User): void {
      if(window.confirm('Are sure you want to delete this item ?')){
           this.userService.deleteCustomer(user.id)
          .subscribe( data => {
            this.showSuccess(`${user.firstName}, ${user.lastName}`);
            this.users = this.users.filter(u => u !== user);
          });
      }
  };

  editCustomer(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-customer']);
  };

  addCustomer(): void {
    this.router.navigate(['add-customer']);
  };

  listCustomer(): void {
    this.router.navigate(['list-customer']);
  };

  viewCustomerDetails(id :number){
       this.userService.getUserById(id).subscribe(
           res => {
              this.flag = false;
              this.customer = res;
           },
           err => {
              console.log('Error occured');
           }
       )
  }

  showSuccess(name : string){  
      this.toastr.success(name + " was successfully deleted.",'Success')  
  }
  
}
