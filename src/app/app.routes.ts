import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register';
import { PlannerComponent } from './budget/planner/planner';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'planner', component: PlannerComponent }
];
