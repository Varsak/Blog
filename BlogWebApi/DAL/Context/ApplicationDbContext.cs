using DAL.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Context
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(): base("DefaultConnection", throwIfV1Schema: false)
        {
            Database.SetInitializer(new StoreDbInitializer());
        }
        public DbSet<Article> Articles { get; set; }
        public DbSet<Comment> Comments { get; set; }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //AspNetUsers -> User
            modelBuilder.Entity<ApplicationUser>()
                .ToTable("User");
            //AspNetRoles -> Role
            modelBuilder.Entity<IdentityRole>()
                .ToTable("Role");
            //AspNetUserRoles -> UserRole
            modelBuilder.Entity<IdentityUserRole>()
                .ToTable("UserRole");
            //AspNetUserClaims -> UserClaim
            modelBuilder.Entity<IdentityUserClaim>()
                .ToTable("UserClaim");
            //AspNetUserLogins -> UserLogin
            modelBuilder.Entity<IdentityUserLogin>()
                .ToTable("UserLogin");
        }
    }
    public class StoreDbInitializer : DropCreateDatabaseIfModelChanges<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext db)
        {
            db.Roles.Add(new IdentityRole { Id = "1", Name = "Admin" }); 
            db.Roles.Add(new IdentityRole { Id = "2", Name = "Moderator" });
            db.Roles.Add(new IdentityRole { Id = "3", Name = "Reader" });
            db.SaveChanges();
        }
    }
}
