import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'forms',
    loadChildren: () => import('./modules/forms/forms.module').then(m => m.FormsModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./modules/items/items.module').then(m => m.ItemsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
