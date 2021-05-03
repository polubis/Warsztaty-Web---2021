using System;

namespace UseCases.TaskCrud.Contracts.Task
{
    public class TaskCommandDto
    {
        public DateTime CreationDate { get; set; }
        public DateTime ModificationDate { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int TaskStateId { get; set; }
    }
}
