using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using My_Todo.Models;

namespace My_Todo.Controllers
{
    [Produces("application/json")]
    [Route("api/Todos")]
    public class TodosController : Controller
    {
        private TodoContext _db;

        public TodosController(TodoContext context)
        {
            _db = context;
        }

        // GET: api/todos
        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            return _db.Todos.ToList();
        }

        // GET: api/todos/pending-only
        [HttpGet]
        [Route("pending-only")]
        public IEnumerable<Todo> GetPendingOnly()
        {
            _db.Todos.RemoveRange(_db.Todos.Where(x => x.Completed == true));
            _db.SaveChanges();
            return _db.Todos.ToList();
        }

        // POST api/todos
        [HttpPost]
        public Todo Post([FromBody]Todo value)
        {
            _db.Todos.Add(value);
            _db.SaveChanges();
            return value;
        }

        // PUT api/todos/id
        [HttpPut("{id}")]
        public Todo Put(int id, [FromBody]Todo value)
        {
            var todo = _db.Todos.FirstOrDefault(x => x.Id == id);
            todo.Title = value.Title;
            todo.Completed = value.Completed;
            _db.Entry(todo).State = EntityState.Modified;
            _db.SaveChanges();
            return value;
        }

        // DELETE api/todos/id
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var todo = _db.Todos.FirstOrDefault(x => x.Id == id);
            _db.Entry(todo).State = EntityState.Deleted;
            _db.SaveChanges();
        }
    }

}
