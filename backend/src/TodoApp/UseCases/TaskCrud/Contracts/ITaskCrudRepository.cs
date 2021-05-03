using System.Threading.Tasks;

namespace UseCases.TaskCrud.Contracts
{
    public interface ITaskCrudRepository
    {
        Task<TaskQueryDto[]> GetTasks();
        Task<TaskQueryDto> GetTask(int id);
        Task<bool> TaskExists(int id);
        Task<int> CreatTask(TaskCommandDto payload);
        Task UpdateTask(int id, TaskCommandDto payload);
        Task DeleteTask(int id);
    }
}
