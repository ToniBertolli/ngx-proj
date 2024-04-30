import { Component } from '@angular/core';
import { Item, ItemService } from '../../shared/item.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

    items$ = this.itemService.items$;

    constructor(
        private router: Router,
        private itemService: ItemService
    ) { }

    display(item: Item) {
        this.router.navigate(['/items', item.id]);
    }

    addItem() {
        this.router.navigate(['/items', 0]);
    }

    deleteItem(item: Item) {
        this.itemService.deleteItem(item.id);
    }
}