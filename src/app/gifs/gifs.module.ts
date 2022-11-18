import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './gifs-page/busqueda/busqueda.component';
import { ResultadoComponent } from './gifs-page/resultado/resultado.component';
import { GifsServiceService } from './gifs-service.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
    GifsPageComponent,
  ]
})
export class GifsModule { }
