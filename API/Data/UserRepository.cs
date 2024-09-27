using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Entities;
using API.Interfaes;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly Datacontext _context; // Ensure correct casing here
        private readonly IMapper _mapper;

        public UserRepository(Datacontext context, IMapper mapper) // Ensure correct casing here
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<AppUser>> GetUsersAsync()
        {
            return await _context.Users.ToListAsync(); // Return all users
        }

        public async Task<AppUser?> GetUserByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id); // Find user by ID
        }

        public async Task<AppUser?> GetUserByUsernameAsync(string username)
        {
            return await _context.Users
                .SingleOrDefaultAsync(user => user.UserName == username); // Find user by username
        }

        public void Update(AppUser user)
        {
            _context.Entry(user).State = EntityState.Modified; // Update user entity
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0; // Save changes to the context
        }

        public async Task<IEnumerable<MemberDto>> GetMembersAsync()
        {
            return await _context.Users
                .ProjectTo<MemberDto>(_mapper.ConfigurationProvider) // Map AppUser to MemberDto
                .ToListAsync(); // Convert the result to a list
        }

        public async Task<MemberDto?> GetMemberAsync(string username)
        {
            return await _context.Users
                .Where(x => x.UserName == username) // Filter by username
                .ProjectTo<MemberDto>(_mapper.ConfigurationProvider) // Map to MemberDto
                .SingleOrDefaultAsync(); // Return single or default
        }
    }
}
