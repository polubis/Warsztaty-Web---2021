using System.Threading.Tasks;
using UseCases.TaskCrud.Contracts.TaskState;

namespace UseCases.TaskCrud.ApplicationLogic.TaskState
{
    public class TaskStateCrudCommands : ITaskStateCrudCommands
    {
        private readonly ITaskStateCrudRepository repo;

        public TaskStateCrudCommands(ITaskStateCrudRepository repo)
        {
            this.repo = repo;
        }

        public async Task<int> CreatTask(TaskStateCommandDto payload)
        {
            var res = await repo.CreateTaskState(payload);
            return res;
        }

        public async System.Threading.Tasks.Task DeleteTask(int id)
        {
            await repo.DeleteTaskState(id);
        }

        public async System.Threading.Tasks.Task UpdateTask(int id, TaskStateCommandDto payload)
        {
            await repo.UpdateTaskState(id, payload);
        }
    }
}
