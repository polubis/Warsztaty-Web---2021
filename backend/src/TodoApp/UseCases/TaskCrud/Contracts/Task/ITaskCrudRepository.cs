using System.Threading.Tasks;

namespace UseCases.TaskCrud.Contracts.Task
{
    public interface ITaskCrudRepository
    {
        Task<TaskQueryDto[]> GetTasks();
        Task<TaskQueryDto> GetTask(int id);
        Task<bool> TaskExists(int id);
        Task<int> CreateTask(TaskCommandDto payload);
        System.Threading.Tasks.Task UpdateTask(int id, TaskCommandDto payload);
        System.Threading.Tasks.Task DeleteTask(int id);
    }
}
