import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  {
    path: 'home',
    canLoad: [AuthGuard],
    loadChildren: './home/home.module#HomePageModule',
  },
  {
    path: 'set-up-profile',
    canLoad: [AuthGuard],
    loadChildren: './set-up-profile/set-up-profile.module#SetUpProfilePageModule' 
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
