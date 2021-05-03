using System.Threading.Tasks;

namespace UseCases.TaskCrud.Contracts
{
    public interface ITaskCrudQueries
    {
        Task<TaskQueryDto[]> GetTasks();
        Task<TaskQueryDto> GetTask(int id);
        Task<bool> TaskExists(int id);
    }
}
