import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items.component';
import { ItemDetailComponent } from './detail/item-detail.component';


const routes: Routes = [
    { path: '', component: ItemsComponent, },
    { path: ':id', component: ItemDetailComponent, }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemsRoutesModule { }