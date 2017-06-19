import { Http, RequestOptions, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html'
})
export class InputExampleComponent implements OnInit {
  apiEndPoint = 'http://localhost:3000/posts';
  text: string;

  constructor(private http: Http) {  }

  ngOnInit() {}

  fileChange(event) {
      let fileList: FileList = event.target.files;
      if(fileList.length > 0) {
          let file: File = fileList[0];
          let formData:FormData = new FormData();
          formData.append('uploadFile', file, file.name);
          this.sendData(formData);
          this.showImage(file);
      }
    }

  sendData(dataForm) {
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.http.post(`${this.apiEndPoint}`, dataForm, options)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(
        data => console.log('success'),
        error => console.log(error, dataForm)
      )
    console.log(dataForm);
  }

  showImage(image) {
    let reader = new FileReader();
    reader.onload = function() {
      let dataURL = reader.result;
      let output = document.getElementById('output');
      output.setAttribute('src', dataURL);
      }
    reader.readAsDataURL(image);
  }
}