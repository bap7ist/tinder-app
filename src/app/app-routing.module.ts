import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SwipeComponent } from './swipe/swipe.component';

const routes: Routes = [
 
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'swipe',
    component: SwipeComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
