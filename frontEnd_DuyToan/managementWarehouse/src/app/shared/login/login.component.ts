import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // public loginForm: FormGroup;
 public url = 'http://5e0d919036b80000143db63b.mockapi.io/Heroes/heroes';
public url1 = 'http://localhost:8080/h2-console/login.jsp?jsessionid=33c7b8129e78313f964bd148e210dba0';
 public logined: boolean;

 public item: any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  loginForm = this.fb.group({
    user: [''],
    password: [''],
    rememberMe: [false],
  });
  onSubmit() {
    if (this.loginForm.value.user === 'admin' && this.loginForm.value.password === 'admin') {
      this.logined = true;
    }
    else{
      this.logined = false;
    }
    // console.log(this.loginForm.value);
    // this.getUser();
  }
  getUser(): Observable<any> {
    return this.http.get(this.url1).subscribe(
      data => {
        this.item = data;
       console.log(this.item)});
  }


}
