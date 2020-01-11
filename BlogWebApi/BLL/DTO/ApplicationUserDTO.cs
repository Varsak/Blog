using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTO
{
    public class ApplicationUserDTO
    {
        public string UserName { get; set; }
        public string Id { get; set; }
        public string Email { get; set; }
        public ApplicationUserDTO(ApplicationUser entity)
        {
            this.Id = entity.Id;

            this.UserName = entity.UserName;
            this.Email = entity.Email;
        }
    }
}
