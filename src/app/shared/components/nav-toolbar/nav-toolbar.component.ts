import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../auth.service';

// zonder styles url, maar met styles in de template

@Component({
    selector: 'app-nav-toolbar',
    templateUrl: './nav-toolbar.component.html',
    styles: [`
        .spacer {
            flex: 1 1 auto;
        }
    `]
})
export class NavToolbarComponent {

    // Input voor de items die in de toolbar getoond moeten worden
    @Input() items: NavItem[] = [];

    // Output wat beschikbaar wordt gesteld aan de parent component
    @Output() toggleSideNav = new EventEmitter<any>();
    @Output() login = new EventEmitter<any>();
    @Output() logout = new EventEmitter<any>();

    loggedIn = this.authService.isAuthenticated$;

    constructor(
        private authService: AuthService
    ) { }

    handleToggleSideNav() {
        this.toggleSideNav.emit();
    }

    handleLogin() {
        this.authService.login();
    }

    handleLogout() {
        this.authService.logout();
    }
}

// Interface voor een navigatie item
export interface NavItem {
    label: string;
    link: string;
    icon: string;
}
