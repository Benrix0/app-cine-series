import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContentComponent } from './add-content/add-content.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SeeContentItemPageComponent } from './see-content-item-page/see-content-item-page.component';
import { SeeContentComponent } from './see-content/see-content.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'see-content', component: SeeContentComponent},
  {path: 'see-content/content/:id', component: SeeContentItemPageComponent},
  {path: 'add-content', component: AddContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
