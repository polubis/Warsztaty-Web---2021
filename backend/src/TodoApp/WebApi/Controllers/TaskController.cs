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

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Get(int id)
        {
            var res = await GetTask(id);

            if (res == null)
            {
                return NotFound();
            }

            return Ok(res);
        }

        private async Task<WebApi.Contracts.Task> GetTask(int id)
        {
            var result = await Task.Factory.StartNew(() => {
                return new WebApi.Contracts.Task
                {
                    Id = id,
                    CreationDate = DateTime.Now.AddDays(id),
                    ModificationDate = DateTime.Now.AddDays(id + 1),
                    Description = $"Description",
                    Name = $"Name",
                    TaskState = new WebApi.Contracts.TaskState
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

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Post([FromBody] Contracts.Task payload)
        {
            int id = await CreatTask(payload);

            return CreatedAtAction(nameof(Get), new { id = id });
        }

        private async Task<int> CreatTask(Contracts.Task payload)
        {
            var result = await Task.Factory.StartNew(() => 1);
            return result;
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Put(int id, [FromBody] Contracts.Task payload)
        {
            if (!(await TaskExists(id)))
            {
                return NotFound();
            }

            await Update(id, payload);

            return NoContent();
        }

        private async Task<bool> TaskExists(int id)
        {
            var result = await Task.Factory.StartNew(() => true);
            return result;
        }

        private async Task<bool> Update(int id, Contracts.Task payload)
        {
            var result = await Task.Factory.StartNew(() => true);
            return result;
        }
    }
}
