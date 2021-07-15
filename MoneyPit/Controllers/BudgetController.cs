using Microsoft.AspNetCore.Mvc;
using MoneyPit.Enums;
using MoneyPit.Models;
using System;
using System.Collections.Generic;

namespace MoneyPit.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BudgetController
    {
        [HttpGet]
        public IEnumerable<Budget> GetBudgetCategorys()
        {

            return new List<Budget>
            {
                new Budget(){ Category=BudgetCategories.Housing, Type=BudgetTypes.Necessity, PercentOfIncome=(decimal).25 },
                new Budget(){ Category=BudgetCategories.Insurance, Type=BudgetTypes.Necessity, PercentOfIncome=(decimal).1 },
                new Budget(){ Category=BudgetCategories.Transportation, Type=BudgetTypes.Necessity, PercentOfIncome=(decimal).1 },
                new Budget(){ Category=BudgetCategories.Utilities, Type=BudgetTypes.Necessity, PercentOfIncome=(decimal).1 },
                new Budget(){ Category=BudgetCategories.Clothing, Type=BudgetTypes.Necessity, PercentOfIncome=(decimal).05 },
                new Budget(){ Category=BudgetCategories.Food, Type=BudgetTypes.Necessity, PercentOfIncome=(decimal).1 },
                new Budget(){ Category=BudgetCategories.Savings, Type=BudgetTypes.Savings, PercentOfIncome=(decimal).1 },
                new Budget(){ Category=BudgetCategories.Entertainment, Type=BudgetTypes.Want, PercentOfIncome=(decimal).1 },
                new Budget(){ Category=BudgetCategories.Misc, Type=BudgetTypes.Want, PercentOfIncome=(decimal).1 },
            };
        }
    }
}

