using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using BLL.DTO;
using BLL.Exceptions;
using BLL.Interfaces;
using DAL.Interfaces;
using DAL.Models;
using DAL.Repositories;

namespace BLL.Services
{
    public class ArticleService : IArticleService, IDisposable
    {
        private IUnitOfWork _uow { get; set; }
        public ArticleService(IUnitOfWork uow)
        {
            _uow = uow;
        }
        public ArticleDTO GetArticle(int id)
        { //string userName;
            //ArticleDTO articleDTO = Mapper.Map<Article, ArticleDTO>(_uow.Articles.Get(id));
            //string userName = articleDTO.UserId;
            //string userN= userManager.GetRoles(articleDTO.UserId)
            //_uow.Articles.Get(id)
            return Mapper.Map<Article, ArticleDTO>(_uow.Articles.Get(id));
        }
        public IEnumerable<ArticleDTO> GetArticles()
        {
            return Mapper.Map<IEnumerable<Article>, IEnumerable<ArticleDTO>>(_uow.Articles.GetAll());
        }
        public void Create(ArticleDTO articleDTO)
        {
            var mapped = Mapper.Map<ArticleDTO, Article>(articleDTO);
            _uow.Articles.Create(mapped);
            _uow.Save();
        }
        public void Update(int id,ArticleDTO articleDTO)
        {
            var mapped = Mapper.Map<ArticleDTO, Article>(articleDTO);
            _uow.Articles.Update(mapped);
            _uow.Save();
        }
        public void Delete(int id)
        {
            if ( _uow.Articles.Get(id) == null)
                throw new NotFoundException("Article not found.");
            _uow.Articles.Delete(id);
            _uow.Save();
        }
        public void Dispose()
        {
            _uow.Dispose();
        }
    }
}
