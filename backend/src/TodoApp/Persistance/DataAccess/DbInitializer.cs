using Persistance.Model;
using System.Threading.Tasks;

namespace Persistance.DataAccess
{
    public static class DbInitializer
    {
        public static async Task Initialize(TodoAppDbContext context)
        {
            await context.Database.EnsureCreatedAsync();

            var taskStates = new[]
            {
                new TaskStateDbo()
                {
                    Id = 1,
                    Name = "ToDo",
                    Description = "Task in this state means it is to do",
                    FontColor = "#000000", //black
                    BackgroundColor = "#FFFF00" // yellow
                },
                new TaskStateDbo()
                {
                    Id = 2,
                    Name = "In Progress",
                    Description = "Task in this state means it is in progress",
                    FontColor = "#000000",
                    BackgroundColor = "#FF0000" // red
                },
                new TaskStateDbo()
                {
                    Id = 3,
                    Name = "Done",
                    Description = "Task in this state means it is in done",
                    FontColor = "#000000",
                    BackgroundColor = "#00FF00" // green
                }
            };

            await context.TaskStates.AddRangeAsync(taskStates);

            var tasks = new[]
            {
                new TaskDbo()
                {
                    Id = 1,
                    Name = "Learn C# fundmantals",
                    Description = "Learn basic C# syntax and how to apply  OOP paradigm of programming in this language.",
                    CreationDate = new System.DateTime(2021, 1, 1),
                    ModificationDate = new System.DateTime(2021, 3, 21),
                    TaskStateId = 3
                },
                new TaskDbo()
                {
                    Id = 2,
                    Name = "Learn ASP.NET fundmantals",
                    Description = "Learn how to write web backend using ASP.NET .NET 5 framework.",
                    CreationDate = new System.DateTime(2021, 2, 1),
                    ModificationDate = new System.DateTime(2021, 4, 1),
                    TaskStateId = 2
                },
                new TaskDbo()
                {
                    Id = 3,
                    Name = "Learn JavaScript fundmentals",
                    Description = "Learn basic JavaScript syntax, and how to apply functional paradigm of programming in this language.",
                    CreationDate = new System.DateTime(2021, 4, 20),
                    ModificationDate = new System.DateTime(2021, 4, 21),
                    TaskStateId = 1
                },
                new TaskDbo()
                {
                    Id = 4,
                    Name = "Learn TypeScript fundmentals",
                    Description = "Learn basic TypeScript syntax, and how to apply functional, reactive, OOP paradigms of programming in this language.",
                    CreationDate = new System.DateTime(2021, 4, 20),
                    ModificationDate = new System.DateTime(2021, 4, 21),
                    TaskStateId = 1
                },
                new TaskDbo()
                {
                    Id = 5,
                    Name = "Learn Angular fundmentals",
                    Description =  "Learn how to write web frontend using Angular framework.",
                    CreationDate = new System.DateTime(2021, 4, 20),
                    ModificationDate = new System.DateTime(2021, 4, 21),
                    TaskStateId = 1
                },
                new TaskDbo()
                {
                    Id = 6,
                    Name = "Learn CSS fundmentals",
                    Description =  "Learn how to style web frontend using CSS syntax. Get familiar with flexbox and grid layous systems in CSS",
                    CreationDate = new System.DateTime(2021, 4, 20),
                    ModificationDate = new System.DateTime(2021, 4, 21),
                    TaskStateId = 1
                },
                new TaskDbo()
                {
                    Id = 7,
                    Name = "Learn SQL Server fundmantals",
                    Description = "Learn basic T-SQL syntax, and configurations",
                    CreationDate = new System.DateTime(2021, 4, 20),
                    ModificationDate = new System.DateTime(2021, 4, 21),
                    TaskStateId = 1
                },
                new TaskDbo()
                {
                    Id = 8,
                    Name = "Learn CI / CD fundmentals using Azure",
                    Description = "Learn basic features of Azure Devops and Azure Portal",
                    CreationDate = new System.DateTime(2021, 4, 20),
                    ModificationDate = new System.DateTime(2021, 4, 21),
                    TaskStateId = 1
                }
            };

            await context.Tasks.AddRangeAsync(tasks);
            await context.SaveChangesAsync();
        }
    }
}
