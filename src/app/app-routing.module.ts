import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstructuraComponent } from './componentes/componentes/estructura/estructura.component';
import { LoginComponent } from './componentes/login/login.component';



const routes: Routes = [
  { path:'', component: EstructuraComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
