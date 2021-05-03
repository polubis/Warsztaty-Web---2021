using AutoMapper;
using Persistance.DataAccess;
using System.Threading.Tasks;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using UseCases.TaskCrud.Contracts.TaskState;

namespace Persistance.Model
{
    public class TaskStateCrudRepository : Repository<TaskStateDbo>, ITaskStateCrudRepository
    {
        private readonly IMapper mapper;
        private DbContextOptionsBuilder<TodoAppDbContext> optionsBuilder;

        public TaskStateCrudRepository(IMapper mapper, IConfiguration configuration)
        {
            optionsBuilder  = OptionsBuilderWrapper.GetDbContextOptionsBuilder(configuration);
            this.mapper = mapper;
        }

        public async Task<TaskStateQueryDto> GetTaskState(int id)
        {
            await using var ctxt = new TodoAppDbContext(optionsBuilder.Options);
            var result = await ctxt.TaskStates
                .ProjectTo<TaskStateQueryDto>(mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(p => p.Id == id);

            return result;
        }

        public async Task<TaskStateQueryDto[]> GetTaskStates()
        {
            await using var ctxt = new TodoAppDbContext(optionsBuilder.Options);
            var result = await ctxt.TaskStates
                .ProjectTo<TaskStateQueryDto>(mapper.ConfigurationProvider)
                .ToArrayAsync();

            return result;
        }

        public async Task DeleteTaskState(int id)
        {
            await using var ctxt = new TodoAppDbContext(optionsBuilder.Options);
            await base.Delete(ctxt, id);
            return;
        }

        public async Task<bool> TaskStateExists(int id)
        {
            await using var ctxt = new TodoAppDbContext(optionsBuilder.Options);
            var exists = await ctxt.TaskStates.FirstOrDefaultAsync(t => t.Id == id) != null;
            return exists;
        }

        public async Task<int> CreateTaskState(TaskStateCommandDto payload)
        {
            await using var ctxt = new TodoAppDbContext(optionsBuilder.Options);
            var task = new TaskStateDbo();
            task = mapper.Map(payload, task);
            var createdId = await base.Create(ctxt, task);

            return createdId;
        }

        public async Task UpdateTaskState(int id, TaskStateCommandDto payload)
        {
            await using var ctxt = new TodoAppDbContext(optionsBuilder.Options);
            var task = new TaskStateDbo();
            task = mapper.Map(payload, task);
            task.Id = id;

            await base.Update(ctxt, task);
        }
    }
}
