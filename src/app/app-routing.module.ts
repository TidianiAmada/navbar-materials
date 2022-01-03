import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  {path:'home', component:DummyComponent},
  {path:'about', component:DummyComponent},
  {path:'contact', component:DummyComponent},
  {path:'signin', component:DummyComponent},
  {path:'login', component:DummyComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
