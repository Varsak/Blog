using BLL.Interfaces;
using BLL.Services;
using DAL.Interfaces;
using DAL.Repositories;
using System.Web.Http;
using Unity;
using Unity.WebApi;

namespace test2212
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<IArticleService, ArticleService>();
            container.RegisterType<ICommentService, CommentService>();
            container.RegisterType<IUnitOfWork, UnitOfWork>();
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}