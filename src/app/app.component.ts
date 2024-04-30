import { Component } from '@angular/core';
import { NavItem } from './shared/components/nav-toolbar/nav-toolbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-proj';
  sideNavOpend = false;
  navItems: NavItem[] = [
    { label: 'Home', link: '/', icon: 'home' },
    { label: 'Forms', link: '/forms', icon: 'widgets' },
    { label: 'Items', link: '/items', icon: 'yard' },
  ];


  handleToggleSideNav() {
    this.sideNavOpend = !this.sideNavOpend;
  }
}
