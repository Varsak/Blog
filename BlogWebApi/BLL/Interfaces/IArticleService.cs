using BLL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
    public interface IArticleService
    {
        IEnumerable<ArticleDTO> GetArticles();
        ArticleDTO GetArticle(int id);
        void Create (ArticleDTO item);
        void Update(int id, ArticleDTO articleDTO);
        void Delete(int id);
    }
}
