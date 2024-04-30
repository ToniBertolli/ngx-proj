import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormResultData, FormResultDialogComponent } from './components/form-result-dialog/form-result-dialog.component';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

    form = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
        type: new FormControl('', Validators.required),
        message: new FormControl(''),
    });

    types: DropdownOption[] = [
        { id: '1', name: 'Individual' },
        { id: '2', name: 'Business' },
        { id: '3', name: 'Other' },
    ];

    constructor(private _dialog: MatDialog) { }

    onSubmit() {
        if (!this.form.valid)
            return;

        const { name, email, phone, type, message } = this.form.value;
        const data: FormResultData = {
            name: name ?? '',
            email: email ?? '',
            phone: phone ?? '',
            type: this.types.find(x => x.id === type),
            message: message ?? '',
        };
        this._dialog.open(FormResultDialogComponent, { data });
    }
}

export interface DropdownOption {
    id: string;
    name: string;
}