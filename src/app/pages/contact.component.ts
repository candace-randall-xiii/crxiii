import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-page',
  template: `
  <page-header headerText="Contact Me" [isMobile]="isMobile"></page-header>
  <div class="contact-page">
  
  <div class="page-content">
    <br>
    <div class="flex-inner"></div>
      <div class="header-cursive">
        <div class="text-area-md" [class.isMobile]="isMobile">
          Questions?  Ideas?  Ready to start your journey?
          Reach out to Candace and get ready to be inspired!
        </div>
        <br>
        <div class="text-area-md" [class.isMobile]="isMobile">
          <p>phone: 412.689.9754</p>
          <p>email: candace0513@icloud.com</p>
        </div>

        <div class="text-area-md" [class.isMobile]="isMobile">
          <h2 [class.isMobile]="isMobile">Social:</h2>
          <p>facebook: Candace Randall</p>
          <p>instagram: cr__xiii</p>
        </div>
      </div>  
  </div>
</div>
  `,
  styleUrls: ['../styles/styles.scss']
})
export class ContactComponent implements OnInit {
  isMobile: boolean;
  constructor() { }

  ngOnInit() {
    this.isMobile = window.innerWidth <= 1024;
  }

}
