import { Component, OnInit } from '@angular/core';
import { NavItem } from './shared/components/nav-toolbar/nav-toolbar.component';
import { ItemService } from './shared/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ngx-proj';
  sideNavOpend = false;
  navItems: NavItem[] = [
    { label: 'Home', link: '/', icon: 'home' },
    { label: 'Forms', link: '/forms', icon: 'widgets' },
    { label: 'Items', link: '/items', icon: 'yard' },
  ];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.initialize();
  }

  handleToggleSideNav() {
    this.sideNavOpend = !this.sideNavOpend;
  }
}
