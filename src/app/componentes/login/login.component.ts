import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { LoginUsuario } from '../model/login-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  roles: string[] = [];
  errMje!:string;

  constructor(private tokenService: TokenService, private formBuilder: FormBuilder, private authService:AuthService, private ruta:Router) { 
    this.form=this.formBuilder.group({
      nombreUsuario:['',[Validators.required, Validators.minLength(5),Validators.maxLength(12)]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]]
      
    })
  }

  get Usuario(){
    return this.form.get("brazon");
  }

  get Mail(){
    return this.form.get("abg.brazon@gmail.com");
  }

  get Password(){
    return this.form.get("17218275");
  }

  

  onEnviar(event: Event) {
    event.preventDefault;
    
    
    this.authService.Login(this.form.value).subscribe((data: { token: string; nombreUsuario: string; authorities: string[]; })=>{
      this.isLogged = true;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;

      this.ruta.navigate(['/portfolio']);
      console.log("Data: 1");
    },

      (     err: { error: { mensaje: string; }; }) => {
      //this.form.markAllAsTouched();
      
      this.isLogged = false;
      this.isLoginFail = true;
      this.errMje = err.error.mensaje;
      console.log(this.errMje);
    })
  }


  get UsuarioValid(){
    return this.Usuario?.touched && !this.Usuario?.valid;
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }

  public nombreUsuario = new FormControl('', Validators.required);
  public email = new FormControl('', Validators.required);

  public password = new FormControl('', Validators.required);

  public newForm = new FormGroup({
    nombreUsuario: this.nombreUsuario,
    email: this.email,
    password: this.password,
  })

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles = this.tokenService.getAuthorities();
    }

  }

}