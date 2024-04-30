import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DropdownOption } from '../../forms.component';

@Component({
    templateUrl: './form-result-dialog.component.html',
})
export class FormResultDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: FormResultData) { }
}

export interface FormResultData {
    name: string;
    email: string;
    phone: string;
    type?: DropdownOption;
    message: string;
}