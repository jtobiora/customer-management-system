import { FileuploadComponent } from './fileupload/fileupload.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  { path: 'file-upload', component: FileuploadComponent },
  { path : '', component : FileuploadComponent}
];

export const routing = RouterModule.forRoot(routes);
