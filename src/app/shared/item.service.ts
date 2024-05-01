import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    // Array van items in memory
    private items: Item[] = [];

    // Subject van een array van items. Deze wordt gebruikt om de items te pushen naar de subscribers
    private itemsChanged = new BehaviorSubject<Item[]>([]);

    // Observable van een array van items. Deze wordt gebruikt om te subscriben op de items
    get items$(): Observable<Item[]> {
        return this.itemsChanged.asObservable();
    }

    // initialiseer de items bij het aanmaken van de service
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

    // Zoek een item op basis van het id
    getItem(id: number): Item | undefined {
        return this.items.find(item => item.id === id);
    }

    // Voeg een nieuw item toe of update een bestaand item
    addOrUpdateItem(updateItem: Item) {
        if (updateItem.id === 0)
            this.addItem(updateItem);
        else
            this.updateItem(updateItem);
    }

    // Voeg een nieuw item toe
    addItem(item: Item): void {
        this.items.push(item);
        this.itemsChanged.next([...this.items]);
    }

    // Update een bestaand item
    updateItem(updateItem: Item): void {
        const index = this.items.findIndex(item => item.id === updateItem.id);
        this.items[index] = updateItem;
        this.itemsChanged.next([...this.items]);
    }

    // Verwijder een item op basis van het id
    deleteItem(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
        this.itemsChanged.next([...this.items]);
    }
}

// Interface van een item (Normaalgesproken vanuit api of database)
export interface Item {
    id: number;
    name: string;
    amount: number;
    price: number;
}