using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Persistance.Model;
using UseCases.TaskCrud.Contracts.Task;
using UseCases.TaskCrud.Contracts.TaskState;

namespace Persistance.DataAccess
{
    public class TodoAppDbContext : DbContext
    {
        public TodoAppDbContext(DbContextOptions<TodoAppDbContext> options) : base(options)
        {
        }

        public DbSet<TaskStateDbo> TaskStates { get; set; }
        public DbSet<TaskDbo> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TaskStateDbo>()
               .Property(t => t.Name).IsRequired();

            modelBuilder.Entity<TaskDbo>()
               .Property(t => t.Name).IsRequired();

            modelBuilder.Entity<TaskDbo>()
                .HasOne(t => t.TaskState)
                .WithMany()
                .HasForeignKey(x => x.TaskStateId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Restrict);
        }
    }

    public class MappingProfile : Profile
    {
        public MappingProfile() 
        {
            CreateMap<TaskCommandDto, TaskDbo>();
            CreateMap<TaskStateCommandDto, TaskStateDbo>();
            CreateMap<TaskStateDbo, TaskStateQueryDto>();
            CreateMap<TaskDbo, TaskQueryDto>();
        } 
    }

    // INFO EF Core 5 migrations https://docs.microsoft.com/pl-pl/ef/core/cli/powershell
    // WebApi ma Microsoft.EntityFrameworkCore.Design
    // Persistance ma Microsoft.EntityFrameworkCore.Tools
    // W startup.cs services.AddDbContext<TodoAppDbContext>(options => options.UseSqlServer(Configuration["ConnectionStrings:Default"]));
    // Defualt Project  w PackageManagerConsoleustawiony na persistance, startowy projekt ustawiony jako WebApi
    // W Package Manager Console
    // PM> Add-Migration InitialMigration
    // Update-Database

}
