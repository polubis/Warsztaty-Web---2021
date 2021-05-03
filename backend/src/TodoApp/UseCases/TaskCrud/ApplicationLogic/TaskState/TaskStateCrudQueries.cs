using System.Threading.Tasks;
using UseCases.TaskCrud.Contracts.TaskState;

namespace UseCases.TaskCrud.ApplicationLogic.TaskState
{
    public class TaskStateCrudQueries : ITaskStateCrudQueries
    {
        private readonly ITaskStateCrudRepository repo;

        public TaskStateCrudQueries(ITaskStateCrudRepository repo)
        {
            this.repo = repo;
        }

        public async Task<TaskStateQueryDto[]> GetTaskStates()
        {
            var res = await repo.GetTaskStates();
            return res;
        }

        public async Task<TaskStateQueryDto> GetTaskState(int id)
        {
            var res = await repo.GetTaskState(id);
            return res;
        }

        public async Task<bool> TaskStateExists(int id)
        {
            var exists = await repo.TaskStateExists(id);
            return exists;
        }
    }
}
