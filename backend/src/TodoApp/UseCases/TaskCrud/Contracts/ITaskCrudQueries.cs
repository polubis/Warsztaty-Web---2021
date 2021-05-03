using System.Threading.Tasks;

namespace UseCases.TaskCrud
{
    public interface ITaskCrudQueries
    {
        Task<Contracts.Task[]> GetTasks();
        Task<Contracts.Task> GetTask(int id);
        Task<bool> TaskExists(int id);
    }
}
