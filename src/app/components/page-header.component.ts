import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-header',
  template: `
  <div class="page-container" class="text-center" style="max-width: 340px; margin: auto">
    <div class="row text-center">
      <div class="col-2" style="float:left;">
        <img width="100%" alt="Flowers" src="../assets/flower-design-left.png">
      </div>
      <div class="col text-center" style="padding-top: 14px">
        <h1>{{headerText}}</h1>
      </div>
      <div class="col-2" style="float:left;">
        <img width="100%" alt="Flowers" src="../assets/flower-design-right.png">
    </div>
  </div>
  `,
  styleUrls: ['../styles/styles.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() headerText: string = '';
  @Input() isMobile: boolean;
  constructor() { }

  ngOnInit() {
  }

}
