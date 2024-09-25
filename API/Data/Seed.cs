using System.Text.Json;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedUsers(UserManager<AppUser> userManager, RoleManager<AppRole> roleManager)
        {
            if (await userManager.Users.AnyAsync()) return;

            // Đọc dữ liệu từ file JSON
            var userData = await System.IO.File.ReadAllTextAsync("Data/UserSeedData.json");
            var users = JsonSerializer.Deserialize<List<AppUser>>(userData, new JsonSerializerOptions 
            { 
                PropertyNameCaseInsensitive = true 
            });

            if (users == null) return;

            foreach (var user in users)
            {
                // Convert UserName về lowercase để tránh vấn đề so sánh không phân biệt hoa thường
                user.UserName = user.Email.ToLower();
                
                // Tạo người dùng với mật khẩu mặc định
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}
