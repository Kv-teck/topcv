using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using API.Entities;

namespace API.Interfaes // Correct namespace here
{
    public interface IUserRepository
    {
        void Update(AppUser user);
        Task<bool> SaveAllAsync();
        Task<IEnumerable<AppUser>> GetUsersAsync();
        Task<AppUser?> GetUserByIdAsync(int id); // Allow null return
        Task<AppUser?> GetUserByUsernameAsync(string username); // Also consider allowing null here
        
        // Get all members as MemberDto
        Task<IEnumerable<MemberDto>> GetMembersAsync();
        // Get a specific member by username
        Task<MemberDto?> GetMemberAsync(string username); // Changed to include a parameter for username
    }
}
