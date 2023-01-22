import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  public setToken(token:string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);

  }

  public getToken(){
    return sessionStorage.getItem(TOKEN_KEY);
  }


  public setUserName(userName:string){
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);

  }

  public getUserName(){
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public setAuthorities(authorities:string[]):void{
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities)); //el JSON convierte el array en un json para poder trabajarlo

  }

  public getAuthorities():string[] {
    this.roles = [];
    if(sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY) || '{}').forEach( (authority: { authority: string; }) => {
        this.roles.push(authority.authority);
        
      });
    }
    return this.roles;
    
  }

  public logOut():void{
    window.sessionStorage.clear();
  }
}
