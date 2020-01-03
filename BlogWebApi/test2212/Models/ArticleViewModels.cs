using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace test2212.Models
{
    public class ArticleViewModels
    {
        public int Id { get; set; }
        public string PostName { get; set; }
        public string PostText { get; set; }
        public DateTime Date { get; set; }
    }
}