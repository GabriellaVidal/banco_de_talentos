
import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})

export class LoginComponent extends NbLoginComponent {

  teste(){
    this.router.navigate(['/pages']);
  }
}
