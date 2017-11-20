import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { MacsComponent } from './macs/macs.component';
import { ViewsRoutingModule } from './views-routing/views-routing.module';
import { AppMaterialModule } from '../app-material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component'

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    AppMaterialModule
  ],
  declarations: [ViewsComponent, MacsComponent, FooterComponent, HeaderComponent]
})
export class ViewsModule { }
