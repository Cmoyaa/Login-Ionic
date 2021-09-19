import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  obtenerUsuario: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public iniciarSesion(){
    this.router.navigate(['/home', {obtenerUsuario: this.obtenerUsuario}])
  }

}

