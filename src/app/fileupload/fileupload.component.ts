import { FileService } from './../service/file.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import {takeUntil} from 'rxjs/operators';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  regForm: FormGroup;
  selectedFile : FileList;
  currentFileUpload : File;
  unSubscribeData: Subject<void> = new Subject<void>();
  constructor(private fb:FormBuilder,private fileService : FileService) { }

  ngOnInit() {
      this.initForm();
  }

  initForm(){
    this.regForm  = this.fb.group({
  
      excelSheet: new FormControl('',Validators.required),
                 
     });   
  }

  fileChange($event){
     //do file validations - like the size and extensions here before selecting the file
    this.selectedFile = $event.target.files;
  }

  tryUpload(){
    if(this.selectedFile.length > 0){
      const file = this.selectedFile[0];
     
      this.fileService.uploadBatch(file).pipe(takeUntil(this.unSubscribeData)).subscribe(
        data => {
            console.log(data);
        },
        error => {
            console.log(error);
        });

    } else {
       alert('Please select a file to continue');
    }
  }
}
