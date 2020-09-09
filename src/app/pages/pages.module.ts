import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutMeComponent } from './about-me.component';
import { GalleryComponent } from './gallery.component';
import { ContactComponent } from './contact.component';
import { MissionComponent } from './mission.component';
import { PageSelectorComponent } from './page-selector.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../components/shared.module';

@NgModule({
  declarations: [HomeComponent, AboutMeComponent, GalleryComponent, ContactComponent, MissionComponent, PageSelectorComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    AboutMeComponent,
    GalleryComponent,
    ContactComponent,
    MissionComponent,
    PageSelectorComponent
  ]
})
export class PagesModule { }
