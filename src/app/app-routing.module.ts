import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PracticeAreaComponent } from './practice-area/practice-area.component';
import { FaqComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FreeConsultComponent } from './free-consult/free-consult.component';

const routes: Routes = [
  {
    path:"",
   redirectTo:"home",
   pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent
  }
  ,
  {
    path:"about",
    component:AboutComponent
  }
  ,
  {
    path:"practice",
    component:PracticeAreaComponent
  }
  ,
  {
    path:"faq",
    component:FaqComponent
  }
  ,
  {
    path:"blog",
    component:BlogComponent
  }
  ,
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"freeConsult",
    component:FreeConsultComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
