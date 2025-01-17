import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { SigninComponent } from './auth';

const routes: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
