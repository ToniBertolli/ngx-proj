// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// AuthService is een service die de authenticatie van de gebruiker bijhoudt
// Normaalgesproken verloopt de authenticatie via een backend, maar voor deze oefening houden we het simpel
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

    login() {
        this.isAuthenticatedSubject.next(true);
    }

    logout() {
        this.isAuthenticatedSubject.next(false);
    }
}