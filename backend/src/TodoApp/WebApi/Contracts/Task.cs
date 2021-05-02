using System;

namespace WebApi.Contracts
{
    public class Task
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime ModificationDate { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public TaskState TaskState { get; set; }
    }
}
