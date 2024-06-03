import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path : 'About', component : AboutUsComponent},
  {path :'', component :HomeComponent},
  {path :'Contant' , component :ContactComponent},
  {path: 'new' , component :NewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
