using System;

namespace UseCases.TaskCrud.Contracts
{
    public class TaskQueryDto
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime ModificationDate { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int TaskStateId { get; set; }
    }
}
