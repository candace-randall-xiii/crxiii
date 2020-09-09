import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutMeComponent } from './pages/about-me.component';
import { GalleryComponent } from './pages/gallery.component';
import { ContactComponent } from './pages/contact.component';
import { MissionComponent } from './pages/mission.component';

const routes: Routes =  [
                          { path: '', component: HomeComponent },
                          { path: 'about-me', component: AboutMeComponent },
                          { path: 'gallery', component: GalleryComponent },
                          { path: 'contact', component: ContactComponent },
                          { path: 'mission', component: MissionComponent },
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
