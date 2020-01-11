using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using BLL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using test2212.Models;

namespace test2212.Controllers
{
    [Authorize]
    public class ArticleController : ApiController
    
    {
        private IArticleService _articleService;
        public ArticleController(IArticleService serv)
        {
            _articleService = serv;
        }
        // GET api/Article
        public IEnumerable<ArticleDTO> Get()
        {
            var art = _articleService.GetArticles();
            return art;
        }
        
        //GET: api/Article/5
        public ArticleDTO Get(int id)
        {
            return _articleService.GetArticle(id); ;
        }

        // POST: api/Article
        public void Post([FromBody] ArticleDTO value)
        {
            _articleService.Create(value);
        }

        // PUT: api/Article/5
        public void Put(int id, [FromBody]ArticleDTO value)
        {
            _articleService.Update(id, value);
        }

        // DELETE: api/Article/5
        [Authorize (Roles ="Admin, Moderator")]
        public void Delete(int id)
        {
            _articleService.Delete(id);
        }
    }
}
