import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../auth.service';

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

    loggedIn = this.authService.isAuthenticated$;

    @Input() items: NavItem[] = [];
    @Output() toggleSideNav = new EventEmitter<any>();
    @Output() login = new EventEmitter<any>();
    @Output() logout = new EventEmitter<any>();

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

export interface NavItem {
    label: string;
    link: string;
    icon: string;
}
