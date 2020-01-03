using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTO
{
    public class CommentDTO
    {
        public int Id { get; set; }
        public string CommentText { get; set; }
        public DateTime Date { get; set; }
        public int ArticleId { get; set; }
        public string UserId { get; set; }
    }
}
