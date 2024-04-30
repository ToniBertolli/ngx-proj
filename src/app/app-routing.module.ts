import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AuthService } from './shared/auth.service';

export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  return authService.isAuthenticated$;
};


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'forms',
    loadChildren: () => import('./modules/forms/forms.module').then(m => m.FormsModule),
    canActivate: []
  },
  {
    path: 'items',
    loadChildren: () => import('./modules/items/items.module').then(m => m.ItemsModule),
    canActivate: [canActivate]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
