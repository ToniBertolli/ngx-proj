import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ItemsComponent } from './items.component';
import { ItemsRoutesModule } from './items.routes';

//create forms module 
@NgModule({
    declarations: [ItemsComponent],
    imports: [
        SharedModule,
        ItemsRoutesModule
    ],
    exports: [

    ]
})
export class ItemsModule { }