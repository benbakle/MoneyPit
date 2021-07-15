using Microsoft.AspNetCore.Mvc;
using MoneyPit.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoneyPit.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TransactionController
    {
        [HttpGet]
        public IEnumerable<Transaction> GetTransactions()
        {
            var _transaction = new Transaction()
            {
                Description = "Hello World",
                TransactionId = Guid.NewGuid()
            };

            return new List<Transaction>
            {
                _transaction,
                _transaction,
                _transaction,
                _transaction,
                _transaction
            };
        }
    }
}

