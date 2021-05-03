using System.Threading.Tasks;

namespace UseCases.TaskCrud.Contracts.TaskState
{
    public interface ITaskStateCrudRepository
    {
        Task<TaskStateQueryDto[]> GetTaskStates();
        Task<TaskStateQueryDto> GetTaskState(int id);
        Task<bool> TaskStateExists(int id);
        Task<int> CreateTaskState(TaskStateCommandDto payload);
        System.Threading.Tasks.Task UpdateTaskState(int id, TaskStateCommandDto payload);
        System.Threading.Tasks.Task DeleteTaskState(int id);
    }
}
