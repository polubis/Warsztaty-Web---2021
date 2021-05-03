using System.Threading.Tasks;

namespace UseCases.TaskCrud.ApplicationLogic
{
    public class TaskCrudCommands :  ITaskCrudCommands
    {
        public async Task<int> CreatTask(Contracts.Task payload)
        {
            var result = await Task.Factory.StartNew(() => 1);
            return result;
        }

        public async Task<bool> DeleteTask(int id)
        {
            var result = await Task.Factory.StartNew(() => true);
            return result;
        }

        public async Task<bool> UpdateTask(int id, Contracts.Task payload)
        {
            var result = await Task.Factory.StartNew(() => true);
            return result;
        }
    }
}
