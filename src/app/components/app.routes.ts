import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from "./main/main.component";

const appRoutes: Routes = [
  {path: 'main', component: MainComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
