import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { ProfileComponent } from './features/profile/profile/profile.component';
import { GuardGuard } from './core/guards/guard.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'profile', component:ProfileComponent, canActivate: [GuardGuard]},
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
