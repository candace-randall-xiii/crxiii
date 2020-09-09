import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-selector',
  template: `
    <home-page *ngIf="route==='home'" (routeChange)="onRouteChange($event)"></home-page>
    <about-me-page *ngIf="route==='about'" (routeChange)="route=$event"></about-me-page>
    <gallery-page *ngIf="route==='gallery'" (routeChange)="route=$event"></gallery-page>
    <contact-page *ngIf="route==='contact'" (routeChange)="route=$event"></contact-page>
    <mission-page *ngIf="route==='mission'" (routeChange)="route=$event"></mission-page>
  `,
  styleUrls: []
})
export class PageSelectorComponent implements OnInit {
  @Input() route: string;

  constructor() { }

  ngOnInit() {
  }

  onRouteChange(newRoute: string) {
    this.route = newRoute;
  }

}
