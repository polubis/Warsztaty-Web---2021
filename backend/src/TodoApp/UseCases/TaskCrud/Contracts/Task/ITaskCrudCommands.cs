using System.Threading.Tasks;

namespace UseCases.TaskCrud.Contracts.Task
{
    public interface ITaskCrudCommands
    {
        Task<int> CreatTask(TaskCommandDto payload);
        System.Threading.Tasks.Task UpdateTask(int id, TaskCommandDto payload);
        System.Threading.Tasks.Task DeleteTask(int id);
    }
}
