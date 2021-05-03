using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Persistance.Model;
using UseCases.TaskCrud.Contracts;

namespace Persistance.DataAccess
{
    public class TodoAppDbContext : DbContext
    {
        public DbSet<TaskDbo> Tasks { get; set; }

        public DbSet<TaskStateDbo> TaskStates { get; set; }

        public TodoAppDbContext(DbContextOptions<TodoAppDbContext> options)
        : base(options)
        {

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
}
