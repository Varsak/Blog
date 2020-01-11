using BLL.DTO;
using BLL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace test2212.Controllers
{
    [Authorize]
    public class CommentController : ApiController
    {

        private ICommentService _commentService;
        public CommentController(ICommentService serv)
        {
            _commentService = serv;
        }
        // GET api/Comment
        public IEnumerable<CommentDTO> Get()
        {
            var item = _commentService.GetComments();
            return item;
        }

        /// <summary>
        /// Get comments by article id.
        /// </summary>
        /// <param name="id">Article ID.</param>
        /// <returns>200 - comment found.</returns>
        public IEnumerable<CommentDTO> GetArtComments(int id)
        {
            IEnumerable<CommentDTO> item = _commentService.GetArtComments(id);
            return item;
        }

        // POST: api/Comment
        public void Post([FromBody] CommentDTO value)
        {
            _commentService.Create(value);
        }

        // PUT: api/Comment/5
        public void Put(int id, [FromBody]CommentDTO value)
        {
            _commentService.Update(id, value);
        }

        // DELETE: api/Comment/5
        [Authorize(Roles = "Admin, Moderator")]
        public void Delete(int id)
        {
            _commentService.Delete(id);
        }
    }
}
