import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  
  url: string = 'http://localhost:8080/template/upload';

  constructor(private http: HttpClient) { }

  uploadBatch(file: File) : Observable<any>{
    let formData:FormData = new FormData();

    formData.append('file', file, file.name);
    const headers = new HttpHeaders({
        'Accept': 'application/json'
    });
    return this.http.post(this.url, formData);
  }
}
