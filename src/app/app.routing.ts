import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePaeComponent } from './home-pae/home-pae.component';
import { PoolPageComponent } from './pool-page/pool-page.component';

const routes: Routes = [
  { path: '', component: HomePaeComponent },
  {
    path: 'pool/:id',
    component: PoolPageComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
