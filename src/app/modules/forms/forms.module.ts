import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormsRoutesModule } from './forms.routes';
import { FormsComponent } from './forms.component';
import { FormResultDialogComponent } from './components/form-result-dialog/form-result-dialog.component';

@NgModule({
    declarations: [
        FormsComponent,
        FormResultDialogComponent
    ],
    imports: [
        SharedModule,
        FormsRoutesModule
    ],
    exports: [

    ]
})
export class FormsModule { }