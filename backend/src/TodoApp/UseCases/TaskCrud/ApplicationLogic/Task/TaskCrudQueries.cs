using System.Threading.Tasks;
using UseCases.TaskCrud.Contracts.Task;

namespace UseCases.TaskCrud.ApplicationLogic.Task
{
    public class TaskCrudQueries : ITaskCrudQueries
    {
        private readonly ITaskCrudRepository taskCrudRepository;

        public TaskCrudQueries(ITaskCrudRepository taskCrudRepository)
        {
            this.taskCrudRepository = taskCrudRepository;
        }

        public async Task<TaskQueryDto[]> GetTasks()
        {
            var res = await taskCrudRepository.GetTasks();
            return res;
        }

        public async Task<TaskQueryDto> GetTask(int id)
        {
            var res = await taskCrudRepository.GetTask(id);
            return res;
        }

        public async Task<bool> TaskExists(int id)
        {
            var exists = await taskCrudRepository.TaskExists(id);
            return exists;
        }
    }
}
