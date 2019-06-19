import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

const routes: Routes = [
  { path: 'add-customer', component: AddUserComponent },
  { path: 'list-customer', component: ListUserComponent,
  },
  { path: 'edit-customer', component: EditUserComponent },
  { path: 'home', component: HomeComponent },
  {path : '', component : ListUserComponent}
];

export const routing = RouterModule.forRoot(routes);
