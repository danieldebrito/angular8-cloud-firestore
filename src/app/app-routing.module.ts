import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// secciones
import { ToasterComponent } from 'src/app/components/toaster/toaster.component'


const appRoutes: Routes = [
  { path: 'home', component: ToasterComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'pageNotFound', component: PageNotFoundComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

