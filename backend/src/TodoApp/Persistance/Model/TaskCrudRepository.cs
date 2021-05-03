using AutoMapper;
using Persistance.DataAccess;
using System.Threading.Tasks;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using UseCases.TaskCrud.Contracts;
using Microsoft.Extensions.Configuration;

namespace Persistance.Model
{
    public class TaskCrudRepository : Repository<TaskDbo>, ITaskCrudRepository
    {
        private readonly IMapper mapper;
        private DbContextOptionsBuilder<TodoAppDbContext> optionsBuilder;

        public TaskCrudRepository(IMapper mapper, IConfiguration configuration)
        {
            optionsBuilder  = OptionsBuilderWrapper.GetDbContextOptionsBuilder(configuration);
            this.mapper = mapper;
        }

        public async Task<TaskQueryDto> GetTask(int id)
        {
            await using var ctxt = new TodoAppDbContext(optionsBuilder.Options);
            var result = await ctxt.Tasks.Include(t => t.TaskState)
                .ProjectTo<TaskQueryDto>(mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(p => p.Id == id);

            return result;
        }

        public async Task<TaskQueryDto[]> GetTasks()
        {
            await using var ctxt = new TodoAppDbContext(optionsBuilder.Options);
            var result = await ctxt.Tasks.Include(t => t.TaskState)
                .ProjectTo<TaskQueryDto>(mapper.ConfigurationProvider)
                .ToArrayAsync();

            return result;
        }

        public async Task DeleteTask(int id)
        {
            await using var ctxt = new TodoAppDbContext(optionsBuilder.Options);
            await base.Delete(ctxt, id);
            return;
        }

        public async Task<bool> TaskExists(int id)
        {
            await using var ctxt = new TodoAppDbContext(optionsBuilder.Options);
            var exists = await ctxt.Tasks.FirstOrDefaultAsync(t => t.Id == id) != null;
            return exists;
        }

        public async Task<int> CreatTask(TaskCommandDto payload)
        {
            await using var ctxt = new TodoAppDbContext(optionsBuilder.Options);
            var task = new TaskDbo();
            task = mapper.Map(payload, task);
            var createdId = await base.Create(ctxt, task);

            return createdId;
        }

        public async Task UpdateTask(int id, TaskCommandDto payload)
        {
            await using var ctxt = new TodoAppDbContext(optionsBuilder.Options);
            var task = new TaskDbo();
            task = mapper.Map(payload, task);
            task.Id = id;

            await base.Update(ctxt, task);
        }
    }
}
