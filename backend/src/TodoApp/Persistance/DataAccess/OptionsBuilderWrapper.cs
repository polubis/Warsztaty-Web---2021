using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Persistance.DataAccess
{
    public static class OptionsBuilderWrapper
    {
        public static DbContextOptionsBuilder<TodoAppDbContext> GetDbContextOptionsBuilder(IConfiguration configuration)
        {
            bool useSqlServer = bool.Parse(configuration["UseSqlServerDb"]);
            var optionsBuilder = new DbContextOptionsBuilder<TodoAppDbContext>();

            if (useSqlServer)
            {
                optionsBuilder.UseSqlServer(configuration["ConnectionStrings:Default"]);
            }
            else
            {
                optionsBuilder.UseInMemoryDatabase("TodoAppDb");
            }          

            return optionsBuilder;
        }
    }
}
