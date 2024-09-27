using API.Extensions;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; } = string.Empty; // Ensure non-nullable
        public required byte[] PasswordHash { get; set; }
        public required byte[] PasswordSalt { get; set; }
        public required string Name { get; set; }  // Nullable if desired
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? ProfileTitle { get; set; }
        public string? City { get; set; }
        public string? Country { get; set; }
        public DateTime DateOfBirth { get; set; }
        public required string Gender { get; set; }
        public required string Introduction { get; set; }
        public required ICollection<Experience> Experiences { get; set; }
        public required ICollection<Education> Educations { get; set; }
        public required ICollection<Skill> Skills { get; set; }
        public required ICollection<Certification> Certifications { get; set; }
        public required ICollection<Language> Languages { get; set; }
        public IList<string> Interests { get; set; } = new List<string>();
        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;
        public ICollection<Photo>? Photos { get; set; }
    }
}