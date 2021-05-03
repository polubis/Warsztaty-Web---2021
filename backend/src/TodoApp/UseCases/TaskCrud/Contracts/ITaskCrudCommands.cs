using System.Threading.Tasks;

namespace UseCases.TaskCrud
{
    public interface ITaskCrudCommands
    {
        Task<int> CreatTask(Contracts.Task payload);    
        Task<bool> UpdateTask(int id, Contracts.Task payload);
        Task<bool> DeleteTask(int id);
    }
}
