import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SseComponent } from './sse/sse.component';


const routes: Routes = [
  {
    path:"**",
    component:SseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
