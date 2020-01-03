using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string CommentText { get; set; }
        public DateTime Date { get; set; }
        public int ArticleId { get; set; }
        public Article Articles { get; set; }
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }

    }
}
