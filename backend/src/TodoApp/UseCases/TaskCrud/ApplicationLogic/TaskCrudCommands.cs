using System.Threading.Tasks;
using UseCases.TaskCrud.Contracts;

namespace UseCases.TaskCrud.ApplicationLogic
{
    public class TaskCrudCommands :  ITaskCrudCommands
    {
        private readonly ITaskCrudRepository taskCrudRepository;

        public TaskCrudCommands(ITaskCrudRepository taskCrudRepository)
        {
            this.taskCrudRepository = taskCrudRepository;
        }

        public async Task<int> CreatTask(Contracts.TaskCommandDto payload)
        {
            var res = await taskCrudRepository.CreatTask(payload);
            return res;
        }

        public async Task DeleteTask(int id)
        {
            await taskCrudRepository.DeleteTask(id);
        }

        public async Task UpdateTask(int id, Contracts.TaskCommandDto payload)
        {
            await taskCrudRepository.UpdateTask(id, payload);
        }
    }
}
