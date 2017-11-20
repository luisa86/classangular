import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsComponent } from '../views.component';
import { MacsComponent} from '../macs/macs.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'macs',
        component: ViewsComponent,
        children:[{
          path: '',
          component: MacsComponent
        }]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})


export class ViewsRoutingModule { }
