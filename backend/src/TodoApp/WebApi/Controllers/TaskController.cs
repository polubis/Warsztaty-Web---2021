using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly ILogger<TaskController> _logger;

        public TaskController(ILogger<TaskController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> Get()
        {
            var res = await GetTasks();
            return Ok(res);
        }

        private async Task<WebApi.Contracts.Task[]> GetTasks()
        {
            var rng = new Random();
            var res = Enumerable.Range(1, 5).Select(index => new WebApi.Contracts.Task
            {
                Id = index,
                CreationDate = DateTime.Now.AddDays(index),
                ModificationDate = DateTime.Now.AddDays(index + 1),
                Description = $"Description {rng.Next(0, 100)}",
                Name = $"Name {rng.Next(0, 100)}",
                TaskState = new WebApi.Contracts.TaskState
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
    }
}
