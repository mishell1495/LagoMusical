import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LagunaComponent } from './paginas/laguna/laguna.component';

const routes: Routes=[
  { path: 'lago',component:LagunaComponent}, 
  { path: '**',pathMatch:'full',redirectTo:'lago'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
