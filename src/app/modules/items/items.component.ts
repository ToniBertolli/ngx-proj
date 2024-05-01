import { Component } from '@angular/core';
import { Item, ItemService } from '../../shared/item.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './items.component.html',
})
export class ItemsComponent {

    items$ = this.itemService.items$; // dit is een observable van een array van items

    constructor(
        private router: Router,
        private itemService: ItemService
    ) { }

    display(item: Item) {
        this.router.navigate(['/items', item.id]); // navigeer naar de detailpagina van het item
    }

    addItem() {
        this.router.navigate(['/items', 0]); // navigeer naar de detailpagina van een nieuw item
    }

    deleteItem(item: Item) {
        this.itemService.deleteItem(item.id); // verwijder het item
    }
}