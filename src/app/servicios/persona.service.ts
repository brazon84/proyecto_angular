import { persona } from 'src/app/componentes/model/persona.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PersonaService{
    URL='http://localhost:8080/personas/';
    
    constructor(private http:HttpClient) { }

    public getPersona(): Observable<persona>{
        return this.http.get<persona>(this.URL+'ver/personas');
    }
    
}
