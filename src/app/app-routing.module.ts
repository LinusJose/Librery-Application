import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { EditComponent } from './edit/edit.component';
import { InsertDataComponent } from './insert-data/insert-data.component';
import { LibrerytableComponent } from './librerytable/librerytable.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'librerytable',component:LibrerytableComponent},
  {path:'bookdetails/:id',component:BookdetailsComponent},
  {path:'insert-data',component:InsertDataComponent},
  {path:'edit/:id',component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
