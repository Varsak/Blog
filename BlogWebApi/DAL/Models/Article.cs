using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
    public class Article
    {
        public int Id { get; set; }
        public string PostName { get; set; }
        public string PostText { get; set; }
        public DateTime Date { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
