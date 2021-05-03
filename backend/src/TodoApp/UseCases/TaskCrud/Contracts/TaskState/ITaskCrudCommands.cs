using System.Threading.Tasks;

namespace UseCases.TaskCrud.Contracts.TaskState
{
    public interface ITaskStateCrudCommands
    {
        Task<int> CreatTask(TaskStateCommandDto payload);
        System.Threading.Tasks.Task UpdateTask(int id, TaskStateCommandDto payload);
        System.Threading.Tasks.Task DeleteTask(int id);
    }
}
