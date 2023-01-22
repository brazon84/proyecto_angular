import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { JwtDto } from '../componentes/model/jwt-dto';
import { LoginUsuario } from '../componentes/model/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api="https://localhost:4200"

  constructor(private http:HttpClient) { }
  Login(credenciales:LoginUsuario):Observable<JwtDto> {
    
    return this.http.post<JwtDto>(this.api + `login`, credenciales)
   
  }


  public get logIn(): boolean {
    return (sessionStorage.getItem('currentUser') == "true"); 
  }
}
