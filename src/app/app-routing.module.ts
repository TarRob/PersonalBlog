import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, data: { routeState: 1 } },
  { path: 'about', component: AboutComponent, data: { routeState: 2 } },
  {
    path: 'post/:id/:slug',
    loadChildren: () => import('./post/post.module').then(m =>
      m.PostModule), data: { routeState: 3 }
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
