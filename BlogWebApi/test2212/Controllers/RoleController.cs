using DAL.Context;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace test2212.Controllers
{
    public class RoleController : ApiController
    {
        [HttpGet]
        [Route("api/GetAllRoles")]
        [Authorize(Roles = "Admin")]
        public HttpResponseMessage GetAllRoles()
        {
            var roleStore = new RoleStore<IdentityRole>(new ApplicationDbContext());
            var roleMngr = new RoleManager<IdentityRole>(roleStore);

            var roles = roleMngr.Roles
                .Select(x => new { x.Id, x.Name })
                .ToList();
            return Request.CreateResponse(HttpStatusCode.OK, roles);
        }
    }
}
