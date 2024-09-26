using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaes;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly Datacontext _context;

        public UserRepository(Datacontext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<AppUser>> GetUsersAsync()
        {
            return await _context.Users.ToListAsync(); // Lấy tất cả người dùng
        }

        public async Task<AppUser?> GetUserByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id); // Tìm người dùng theo ID
        }

        public async Task<AppUser?> GetUserByUsernameAsync(string username)
        {
            return await _context.Users
                .SingleOrDefaultAsync(user => user.UserName == username); // Tìm người dùng theo Username
        }

        public void Update(AppUser user)
        {
            _context.Entry(user).State = EntityState.Modified; // Cập nhật người dùng
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0; // Lưu các thay đổi
        }
    }
}
