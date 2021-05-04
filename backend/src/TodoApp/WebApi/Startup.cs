using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Persistance.DataAccess;
using Persistance.Model;
using UseCases.TaskCrud.ApplicationLogic.Task;
using UseCases.TaskCrud.ApplicationLogic.TaskState;
using UseCases.TaskCrud.Contracts.Task;
using UseCases.TaskCrud.Contracts.TaskState;

namespace WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Uncomment for running Migrations 
            // services.AddDbContext<TodoAppDbContext>(options => options.UseSqlServer(Configuration["ConnectionStrings:Default"]));

            services.AddAutoMapper(typeof(TodoAppDbContext));

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "TodApp WebApi", Version = "v1" });
            });

            RegisterServices(services);
        }

        private void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<UseCases.TaskCrud.Contracts.Task.ITaskCrudCommands, TaskCrudCommands>();
            services.AddScoped<UseCases.TaskCrud.Contracts.Task.ITaskCrudQueries, TaskCrudQueries>();
            services.AddScoped<ITaskCrudRepository, TaskCrudRepository>();

            services.AddScoped<UseCases.TaskCrud.Contracts.TaskState.ITaskStateCrudCommands, TaskStateCrudCommands>();
            services.AddScoped<UseCases.TaskCrud.Contracts.TaskState.ITaskStateCrudQueries, TaskStateCrudQueries>();
            services.AddScoped<ITaskStateCrudRepository, TaskStateCrudRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //if (env.IsDevelopment())
            //{
            //    app.UseDeveloperExceptionPage();
            //    app.UseSwagger();
            //    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebApi v1"));
            //}


            app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebApi v1"));

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
