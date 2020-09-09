import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'header-main',
  template: `
  <header>
    <div style="text-align:left">
      <img width="100%" alt="CR13 Logo" src="../assets/header-image-leather.png">
      <h1 class="background-light" *ngIf="!isMobile">
        Personal Styling    --    Image Consultation    --    Transformative Fashion Guidance
      </h1>
    </div>
    <div id="nav-icon3" class="mt-1" style="position:absolute; right:10px; top:10px; z-index: 999999" (click)="toggleMenu()" [class.open]="menuOpened">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
  <div class="menu container" *ngIf="menuOpened" [class.isMobile]="isMobile"> 
    <div class="row text-center menu-item" *ngFor="let item of myWorkRoutes">
      <a (click)="setRoute(item.route)"
        [class.selected]="isCurrentRoute(item.route)"
        routerLinkActive="list-item-active">
        <fa-icon *ngIf="item.icon" [icon]="item.icon" style="margin-right:10px"></fa-icon>
        {{item.title}}
      </a>
    </div>
  </div>
  `,
  styleUrls: ['../styles/styles.scss']
})
export class HeaderMainComponent implements OnInit {
  @Output() appRouteChange: EventEmitter<string> = new EventEmitter();
  isMobile: boolean;
  menuOpened: boolean = false;
  public route: string = 'home';
  public myWorkRoutes = [
    {
      title: 'Home',
      route: 'home',
      icon: null //faHome
    },
    {
      title: 'About Me',
      route: 'about',
      icon: null //faBook
    },
    {
      title: 'Gallery',
      route: 'gallery',
      icon: null //faCameraRetro
    },
    {
      title: 'Contact Me',
      route: 'contact',
      icon: null //faMobileAlt
    },
    {
      title: 'Mission Statement',
      route: 'mission',
      icon: null //faMapSigns
    },
  ]

  constructor() { }

  ngOnInit() {
    this.isMobile = window.innerWidth <= 1024;
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  
  public setRoute(route: string) {
    this.route = route;
    this.appRouteChange.emit(this.route);
    this.menuOpened = false;
  }

  public isCurrentRoute(route: string): boolean {
    return route === this.route;
  }

}
