using System.Threading.Tasks;

namespace UseCases.TaskCrud.Contracts
{
    public interface ITaskCrudCommands
    {
        Task<int> CreatTask(TaskCommandDto payload);
        Task UpdateTask(int id, TaskCommandDto payload);
        Task DeleteTask(int id);
    }
}
