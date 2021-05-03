using System;
using System.Linq;
using System.Threading.Tasks;

namespace UseCases.TaskCrud.ApplicationLogic
{
    public class TaskCrudQueries : ITaskCrudQueries
    {
        public async Task<Contracts.Task[]> GetTasks()
        {
            var rng = new Random();
            var res = Enumerable.Range(1, 5).Select(index => new Contracts.Task
            {
                Id = index,
                CreationDate = DateTime.Now.AddDays(index),
                ModificationDate = DateTime.Now.AddDays(index + 1),
                Description = $"Description {rng.Next(0, 100)}",
                Name = $"Name {rng.Next(0, 100)}",
                TaskState = new Contracts.TaskState
                {
                    Id = index,
                    Description = $"Description {rng.Next(0, 100)}",
                    Name = $"Name {rng.Next(0, 100)}",
                    FontColor = $"#0011{rng.Next(0, 100)}",
                    BackgroundColor = $"#0022{rng.Next(0, 100)}",
                }
            }).ToArray();

            var result = await Task.Factory.StartNew(() => res);
            return result;
        }

        public async Task<Contracts.Task> GetTask(int id)
        {
            var result = await Task.Factory.StartNew(() =>
            {
                return new Contracts.Task
                {
                    Id = id,
                    CreationDate = DateTime.Now.AddDays(id),
                    ModificationDate = DateTime.Now.AddDays(id + 1),
                    Description = $"Description",
                    Name = $"Name",
                    TaskState = new Contracts.TaskState
                    {
                        Id = id,
                        Description = $"Description",
                        Name = $"Name",
                        FontColor = $"#001122",
                        BackgroundColor = $"#002233",
                    }
                };
            });
            return result;
        }

        public async Task<bool> TaskExists(int id)
        {
            var result = await Task.Factory.StartNew(() => true);
            return result;
        }
    }
}
