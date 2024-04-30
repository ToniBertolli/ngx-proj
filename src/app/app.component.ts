import { Component, OnInit } from '@angular/core';
import { NavItem } from './shared/components/nav-toolbar/nav-toolbar.component';
import { ItemService } from './shared/item.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ngx-proj';
  sideNavOpend = false;
  loggedIn = false;
  navItems: NavItem[] = [
    { label: 'Home', link: '/', icon: 'home' },
    { label: 'Forms', link: '/forms', icon: 'widgets' },
    { label: 'Items', link: '/items', icon: 'yard' },
  ];

  constructor(
    private itemService: ItemService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.itemService.initialize();
    this.authService.isAuthenticated$.subscribe((loggedIn) => this.loggedIn = loggedIn);
  }

  handleToggleSideNav() {
    this.sideNavOpend = !this.sideNavOpend;
  }
}
