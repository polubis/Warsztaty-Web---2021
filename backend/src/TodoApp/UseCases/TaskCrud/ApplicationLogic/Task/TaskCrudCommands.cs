using System.Threading.Tasks;
using UseCases.TaskCrud.Contracts.Task;

namespace UseCases.TaskCrud.ApplicationLogic.Task
{
    public class TaskCrudCommands : ITaskCrudCommands
    {
        private readonly ITaskCrudRepository taskCrudRepository;

        public TaskCrudCommands(ITaskCrudRepository taskCrudRepository)
        {
            this.taskCrudRepository = taskCrudRepository;
        }

        public async Task<int> CreatTask(TaskCommandDto payload)
        {
            var res = await taskCrudRepository.CreateTask(payload);
            return res;
        }

        public async System.Threading.Tasks.Task DeleteTask(int id)
        {
            await taskCrudRepository.DeleteTask(id);
        }

        public async System.Threading.Tasks.Task UpdateTask(int id, TaskCommandDto payload)
        {
            await taskCrudRepository.UpdateTask(id, payload);
        }
    }
}
