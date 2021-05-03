using System;
using UseCases.TaskCrud.Contracts.TaskState;

namespace UseCases.TaskCrud.Contracts.Task
{
    public class TaskQueryDto
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime ModificationDate { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public TaskStateQueryDto TaskState { get; set; }
    }
}
