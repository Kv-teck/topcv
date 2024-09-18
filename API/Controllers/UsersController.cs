using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/controller")]
    public class UsersController : ControllerBase
    
    {
        private readonly Datacontext _context;

        public UsersController(Datacontext context)
        {
            _context = context;
        }
        [HttpGet]
        public ActionResult<IEnumerable<AppUser>> GetUser()
        {
            var users = _context.Users.ToList();
            return users;
        }

        //api/users/3
        [HttpGet("{id}")]
        public ActionResult<AppUser> GetUser(int id)
        {
            return _context.Users.Find(id);
        }
    }
}