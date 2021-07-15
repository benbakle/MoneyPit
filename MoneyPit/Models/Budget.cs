using MoneyPit.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoneyPit.Models
{
    public class Budget
    {
        public Enums.BudgetCategories Category { get; set; }
        public BudgetTypes Type { get; set; }
        public decimal PercentOfIncome { get; set; }
    }
}
