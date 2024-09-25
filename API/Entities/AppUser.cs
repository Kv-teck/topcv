using API.Extensions;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string UserName { get; set; }
        public required byte[] PasswordHash { get; set; }
        public required byte[] PasswordSalt { get; set; }
        public required  string Email { get; set; }
        public required  string PhoneNumber { get; set; }
        public required  string ProfileTitle { get; set; }
        public required  string City { get; set; }
        public required  string Country { get; set; }
        public DateTime DateOfBirth { get; set; }
        public required  string Gender { get; set; }
        public required  string Introduction { get; set; }
        public required  ICollection<Experience> Experiences { get; set; }
        public required  ICollection<Education> Educations { get; set; }
        public required  ICollection<Skill> Skills { get; set; }
        public required  ICollection<Certification> Certifications { get; set; }
        public required  ICollection<Language> Languages { get; set; }
        public IList<string> Interests { get; set; } = new List<string>();
        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;
        public required ICollection<Photo> Photos { get; set; }

        public int GetAge()
        {
            return DateTime.Today.Year - DateOfBirth.Year;
        }
    }
}