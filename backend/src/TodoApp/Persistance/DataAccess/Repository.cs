using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Persistance.DataAccess
{
    public class Repository<T>  where T : DboEntity, new()
    {
        public async Task<T[]> Get(TodoAppDbContext ctxt)
        {
            return await ctxt.Set<T>().ToArrayAsync();
        }

        public async Task<T> GetById(TodoAppDbContext ctxt, int id)
        {
            return await ctxt.Set<T>().FirstOrDefaultAsync(m => m.Id == id);
        }     

        public async Task<int> Create(TodoAppDbContext ctxt, T entity)
        {
            await ctxt.Set<T>().AddAsync(entity);
            await ctxt.SaveChangesAsync();

            return entity.Id;
        }

        public async Task Update(TodoAppDbContext ctxt, T entity)
        {
            ctxt.Attach(entity).State = EntityState.Modified;
            await ctxt.SaveChangesAsync();
        }

        public async Task Delete(TodoAppDbContext ctxt, int id)
        {
            var entity = new T() { Id = id };
            ctxt.Attach(entity).State = EntityState.Deleted;
            await ctxt.SaveChangesAsync();
        }
    }
}
