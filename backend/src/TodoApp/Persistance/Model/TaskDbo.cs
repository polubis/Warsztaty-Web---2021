using Persistance.DataAccess;
using System;

namespace Persistance.Model
{
    public class TaskDbo : DboEntity
    {
        public DateTime CreationDate { get; set; }
        public DateTime ModificationDate { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int TaskStateId { get; set; }
        public TaskStateDbo TaskState { get; set; }
    }
}
