import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DropdownOption } from '../../forms.component';

@Component({
    template: `
        <h2 mat-dialog-title>Results</h2>
        <mat-dialog-content class="mat-typography">
            <p>Name: {{ data.name }}</p>
            <p>Email: {{ data.email }}</p>
            <p>Phone: {{ data.phone }}</p>
            <p>Type: {{ data.type?.name }}</p>
            <p>Message: {{ data.message }}</p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button mat-dialog-close>Dismiss</button>
        </mat-dialog-actions>
        `
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