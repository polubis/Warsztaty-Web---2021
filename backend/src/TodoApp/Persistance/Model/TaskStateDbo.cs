using Persistance.DataAccess;

namespace Persistance.Model
{
    public class TaskStateDbo : DboEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string FontColor { get; set; }
        public string BackgroundColor { get; set; }
    }
}
