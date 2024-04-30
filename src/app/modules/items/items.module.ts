import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ItemsComponent } from './items.component';
import { ItemsRoutesModule } from './items.routes';
import { ItemDetailComponent } from './detail/item-detail.component';

@NgModule({
    declarations: [
        ItemsComponent, ItemDetailComponent
    ],
    imports: [
        SharedModule,
        ItemsRoutesModule
    ],
    exports: [

    ],
    providers: [

    ]
})
export class ItemsModule { }