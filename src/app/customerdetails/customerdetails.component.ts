import { User } from './../model/user.model';
import { UserService } from '../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  customer : User;
  constructor(private route: ActivatedRoute,private router: Router,private service: UserService) { }

  ngOnInit() {
      let id = this.route.snapshot.paramMap.get('id');
      this.service.getUserById(+id).subscribe(
          res => {
              this.customer = res;
          }
      );
  }

}
