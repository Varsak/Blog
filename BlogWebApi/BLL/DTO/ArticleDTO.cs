using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//using DAL.Models;

namespace BLL.DTO
{
    public class ArticleDTO
    {
        public int Id { get; set; }
        public string PostName { get; set; }
        public string PostText { get; set; }
        public DateTime Date { get; set; }
        public string UserId { get; set; }
    }
}
