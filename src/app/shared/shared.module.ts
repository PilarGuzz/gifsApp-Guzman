import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GifsPageComponent } from '../gifs/gifs-page/gifs-page.component';
import { GifsModule } from '../gifs/gifs.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    GifsModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }