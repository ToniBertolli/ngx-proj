import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormsRoutesModule } from './forms.routes';
import { FormsComponent } from './forms.component';

//create forms module 
@NgModule({
    declarations: [FormsComponent],
    imports: [
        SharedModule,
        FormsRoutesModule
    ],
    exports: [

    ]
})
export class FormsModule { }