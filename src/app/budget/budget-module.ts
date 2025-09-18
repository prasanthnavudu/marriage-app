import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing-module';
import { PlannerComponent } from './planner/planner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    PlannerComponent
  ]
})
export class BudgetModule { }
