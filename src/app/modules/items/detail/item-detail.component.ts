import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item, ItemService } from '../../../shared/item.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
    templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {
    item?: Item;

    form = new FormGroup({
        name: new FormControl(''),
        price: new FormControl(0),
        amount: new FormControl(0),
    });

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private itemService: ItemService
    ) { }

    ngOnInit(): void {
        this.getItem();
    };

    getItem(): void {
        this.route.params.subscribe((params) => {
            this.item = this.itemService.getItem(Number(params['id']));
            this.form.patchValue({
                name: this.item?.name,
                price: this.item?.price,
                amount: this.item?.amount,
            });
        });
    }

    onSubmit() {
        const updateItem: Item = {
            id: this.item?.id || 0,
            name: this.form.value.name || '',
            amount: this.form.value.amount || 0,
            price: this.form.value.price || 0,
        };

        this.itemService.addOrUpdateItem(updateItem);
        this.router.navigate(['/items']);
    }
}