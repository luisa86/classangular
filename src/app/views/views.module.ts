import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { MacsComponent } from './macs/macs.component';
import { ViewsRoutingModule } from './views-routing/views-routing.module';
import { AppMaterialModule } from '../app-material.module'

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    AppMaterialModule
  ],
  declarations: [ViewsComponent, MacsComponent]
})
export class ViewsModule { }
