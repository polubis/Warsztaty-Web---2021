using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using UseCases.TaskCrud.Contracts.TaskState;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskStateCrudController : ControllerBase
    {
        private readonly ILogger<TaskStateCrudController> logger;
        private readonly ITaskStateCrudCommands commands;
        private readonly ITaskStateCrudQueries queries;

        public TaskStateCrudController(ILogger<TaskStateCrudController> logger,
            ITaskStateCrudCommands commands,
            ITaskStateCrudQueries queries)
        {
            this.logger = logger;
            this.commands = commands;
            this.queries = queries;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> Get()
        {
            var res = await queries.GetTaskStates();
            return Ok(res);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Get(int id)
        {
            var res = await queries.GetTaskState(id);

            if (res == null)
            {
                return NotFound();
            }

            return Ok(res);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Post([FromBody] TaskStateCommandDto payload)
        {
            int id = await commands.CreatTask(payload);

            return CreatedAtAction(nameof(Get), new { id = id });
        }


        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Put(int id, [FromBody] TaskStateCommandDto payload)
        {
            if (!(await queries.TaskStateExists(id)))
            {
                return NotFound();
            }

            await commands.UpdateTask(id, payload);

            return NoContent();
        }


        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(int id)
        {
            if (!(await queries.TaskStateExists(id)))
            {
                return NotFound();
            }

            await commands.DeleteTask(id);

            return NoContent();
        }
    }
}
