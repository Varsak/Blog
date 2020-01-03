using AutoMapper;
using BLL.Infrastructure;
using BLL.Mapping;
using Ninject;
using Ninject.Modules;
using Ninject.Web.Mvc;
//using Ninject.Web.test2212;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
//using test2212.Util;

namespace test2212
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            UnityConfig.RegisterComponents();
            //Mapper.Initialize(c => c.AddProfile<MappingProfile>());
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            ////NinjectModule articleModule = new ArticleModule();
            //NinjectModule serviceModule = new ServiceModule("DefaultConnection");
            //var kernel = new StandardKernel(serviceModule);
            //DependencyResolver.SetResolver(new NinjectDependencyResolver(kernel));
        }
    }
}
