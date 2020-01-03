using AutoMapper;
using BLL.DTO;
using BLL.Exceptions;
using BLL.Interfaces;
using DAL.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class CommentService : ICommentService, IDisposable
    {
        private IUnitOfWork _uow { get; set; }
        public CommentService(IUnitOfWork uow)
        {
            _uow = uow;
        }
        public CommentDTO GetComment(int id)
        {
            return Mapper.Map<Comment, CommentDTO>(_uow.Comments.Get(id));
        }
        public IEnumerable<CommentDTO> GetComments()
        {
            return Mapper.Map<IEnumerable<Comment>, IEnumerable<CommentDTO>>(_uow.Comments.GetAll());
        }
        public void Create(CommentDTO commentDTO)
        {
            var mapped = Mapper.Map<CommentDTO, Comment>(commentDTO);
            _uow.Comments.Create(mapped);
            _uow.Save();
        }
        public void Update(int id, CommentDTO commentDTO)
        {
            var mapped = Mapper.Map<CommentDTO, Comment>(commentDTO);
            _uow.Comments.Update(mapped);
            _uow.Save();
        }
        public void Delete(int id)
        {
            if (_uow.Comments.Get(id) == null)
                throw new NotFoundException("Comment not found.");
            _uow.Comments.Delete(id);
            _uow.Save();
        }
        public void Dispose()
        {
            _uow.Dispose();
        }
    }
}
