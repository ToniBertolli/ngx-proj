import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    private items: Item[] = [];
    private itemsChanged = new BehaviorSubject<Item[]>([]);

    get items$(): Observable<Item[]> {
        return this.itemsChanged.asObservable();
    }

    initialize(): void {
        this.items = [
            { id: 1, name: 'Banana', amount: 50, price: 1.5 },
            { id: 2, name: 'Apple', amount: 30, price: 2.5 },
            { id: 3, name: 'Orange', amount: 40, price: 1.7 },
            { id: 4, name: 'Mango', amount: 20, price: 3.5 },
            { id: 5, name: 'Pineapple', amount: 10, price: 4.5 }
        ];
        this.itemsChanged.next([...this.items]);
    }

    getItem(id: number): Item | undefined {
        return this.items.find(item => item.id === id);
    }

    addOrUpdateItem(updateItem: Item) {
        if (updateItem.id === 0)
            this.addItem(updateItem);
        else
            this.updateItem(updateItem);
    }

    addItem(item: Item): void {
        this.items.push(item);
        this.itemsChanged.next([...this.items]);
    }

    updateItem(updateItem: Item): void {
        const index = this.items.findIndex(item => item.id === updateItem.id);
        this.items[index] = updateItem;
        this.itemsChanged.next([...this.items]);
    }

    deleteItem(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
        this.itemsChanged.next([...this.items]);
    }
}

export interface Item {
    id: number;
    name: string;
    amount: number;
    price: number;
}