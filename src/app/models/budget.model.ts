export interface BudgetCategory {
  id: string;
  name: string;       // e.g. "Venue", "Catering"
  planned: number;    // planned cost
  spent: number;      // actual spent
}

export interface WeddingBudget {
  id: string;
  totalBudget: number;
  categories: BudgetCategory[];
}
