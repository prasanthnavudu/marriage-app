import { Component } from '@angular/core';
import { BudgetCategory, WeddingBudget } from '../../models/budget.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-planner',
  standalone: true, // ✅ standalone component
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './planner.html',
  styleUrls: ['./planner.scss']
})
export class PlannerComponent {
  budget: WeddingBudget = {
    id: crypto.randomUUID(),
    totalBudget: 500000,
    categories: [
      { id: crypto.randomUUID(), name: 'Venue', planned: 200000, spent: 0 },
      { id: crypto.randomUUID(), name: 'Catering', planned: 150000, spent: 0 },
      { id: crypto.randomUUID(), name: 'Photography', planned: 50000, spent: 0 },
    ]
  };

  addCategory() {
    this.budget.categories.push({
      id: crypto.randomUUID(),
      name: 'New Category',
      planned: 0,
      spent: 0
    });
  }

  getTotalSpent() {
    return this.budget.categories.reduce((sum, c) => sum + c.spent, 0);
  }
}
