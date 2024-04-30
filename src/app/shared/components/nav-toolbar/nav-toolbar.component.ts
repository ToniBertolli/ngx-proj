import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-nav-toolbar',
    templateUrl: './nav-toolbar.component.html',
    styleUrls: ['./nav-toolbar.component.scss']
})
export class NavToolbarComponent {

    @Input() items: NavItem[] = [];
    @Output() toggleSideNav = new EventEmitter<any>();

    handleToggleSideNav() {
        this.toggleSideNav.emit();
    }
}


export interface NavItem {
    label: string;
    link: string;
    icon: string;
}
