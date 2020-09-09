import { Component, Input, SimpleChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { faMobileAlt, faCameraRetro, faCamera, faBookOpen, faLightbulb, faBook, faHome, faMapSigns } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  template: `
  <mat-sidenav-container mode="side" opened="true" style="min-height: 100vh">

    <mat-sidenav mode="side" opened="true" style="height:100%" *ngIf="hasSideNav">
  
      <mat-nav-list>
        
        <a *ngFor="let item of myWorkRoutes"
          mat-list-item
          (click)="setRoute(item.route)"
          [class.selected]="isCurrentRoute(item.route)"
          routerLinkActive="list-item-active">
          <fa-icon *ngIf="item.icon" [icon]="item.icon" style="margin-right:10px"></fa-icon>
          {{item.title}}
        </a>
  
        <mat-divider></mat-divider>
  
      </mat-nav-list>
    </mat-sidenav>
  
    <mat-sidenav-content style="height:100%">
      <page-selector [route]="route"></page-selector>
    </mat-sidenav-content>
    
  </mat-sidenav-container>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() route: string;
  public hasSideNav = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  public APP_TOOLBAR_TITLE = 'CR thirteen';
  public MY_WORK = 'My Work';

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
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.route) {
      this.setRoute(changes.route.currentValue);
    }
  }

  public setRoute(route: string) {
    this.route = route;
  }

  public isCurrentRoute(route: string): boolean {
    return route === this.route;
  }

}
