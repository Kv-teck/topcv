using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.Dtos;
using API.DTOs;
using API.Entities;
using API.Interfaes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly Datacontext _context;
        private readonly ITokenService _tokenService;
        public AccountController(Datacontext context, ITokenService tokenService)
        {
            _tokenService = tokenService;
            _context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (await UserExists(registerDto.Username)) return BadRequest("Username is taken");

            using var hmac = new HMACSHA512();

            var user = new AppUser
            {
                Name = registerDto.Name,
                UserName = registerDto.Username,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)), // Mã băm
                PasswordSalt = hmac.Key // Khóa băm
            };
            _context.Users.Add(user);

            await _context.SaveChangesAsync();

            return new UserDto
            {
                Username = user.UserName,
                Name = registerDto.Name,
                Token = _tokenService.CreateToken(user)
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.Username);
            if (user == null) return Unauthorized("Tên người dùng không hợp lệ");

            using var hmac = new HMACSHA512(user.PasswordHash);
            var computeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));
            for (int i = 0; i < computeHash.Length; i++)
            {
                if (computeHash[i] != user.PasswordHash[i]) return Unauthorized("Mật khẩu không hợp lệ");
            }


            return new UserDto
            {
                Name = user.Name,
                Username = user.UserName,
                Token = _tokenService.CreateToken(user)
            };
        }


        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }


    }
}