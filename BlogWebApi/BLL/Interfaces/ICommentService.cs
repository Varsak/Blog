using BLL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
    public interface ICommentService
    {
        IEnumerable<CommentDTO> GetComments();
        IEnumerable<CommentDTO> GetArtComments(int id);
        CommentDTO GetComment(int id);
        void Create(CommentDTO item);
        void Update(int id, CommentDTO commentDTO);
        void Delete(int id);
    }
}
