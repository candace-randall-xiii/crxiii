import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mission-page',
  template: `
  <page-header headerText="Our Mission" [isMobile]="isMobile"></page-header>
  <div class="mission-page">
  
  <div class="page-content">
    <br>
    <div class="flex-inner"></div>
      <div class="header-cursive" [class.isMobile]="isMobile">
        <div class="text-area-md" [class.isMobile]="isMobile">
          Size 2?  Great! <br>
          Not a size 2?  Also great!
        </div>
        <div class="text-area-md" [class.isMobile]="isMobile">
          CR thirteen is experienced in, and dedicated to, revealing your personal
          style, confidence, and beauty.  We all have that within us.
        </div>
        <div class="text-area-sm" [class.isMobile]="isMobile">
          We don't fit into molds, and we shouldn't have to try. 
        </div>
        <div class="text-area-md"  [class.isMobile]="isMobile" style="font-size:50px; font-weight:800">
          Be You.  Let us help.
        </div>
      </div>  
  </div>
</div>
  `,
  styleUrls: ['../styles/styles.scss']
})
export class MissionComponent implements OnInit {
  isMobile: boolean;
  constructor() { }

  ngOnInit() {
    this.isMobile = window.innerWidth <= 1024;
  }

}
