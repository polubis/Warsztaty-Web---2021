using System.Threading.Tasks;

namespace UseCases.TaskCrud.Contracts.TaskState
{
    public interface ITaskStateCrudQueries
    {
        Task<TaskStateQueryDto[]> GetTaskStates();
        Task<TaskStateQueryDto> GetTaskState(int id);
        Task<bool> TaskStateExists(int id);
    }
}
