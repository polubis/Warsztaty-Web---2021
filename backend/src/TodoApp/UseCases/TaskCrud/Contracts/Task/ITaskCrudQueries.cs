using System.Threading.Tasks;

namespace UseCases.TaskCrud.Contracts.Task
{
    public interface ITaskCrudQueries
    {
        Task<TaskQueryDto[]> GetTasks();
        Task<TaskQueryDto> GetTask(int id);
        Task<bool> TaskExists(int id);
    }
}
