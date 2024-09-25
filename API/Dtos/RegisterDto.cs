using System.ComponentModel.DataAnnotations;
using API.Entities;
using API.Extensions;

namespace API.DTOs
{
public class RegisterDto
{
    public required  string UserName { get; set; }
    public required  string Password { get; set; }
    public required  string Name { get; set; }
    public required  string Email { get; set; }
    public required  string PhoneNumber { get; set; }
    public required  string ProfileTitle { get; set; }
    public required  string City { get; set; }
    public required  string Country { get; set; }
    public required  string Gender { get; set; }
    public required string Introduction { get; set; }
    // Optional properties
    public List<Experience> Experiences { get; set; } = new List<Experience>();
    public List<Education> Educations { get; set; } = new List<Education>();
    public List<Skill> Skills { get; set; } = new List<Skill>();
    public List<Certification> Certifications { get; set; } = new List<Certification>();
    public List<Language> Languages { get; set; } = new List<Language>();
    public List<string> Interests { get; set; } = new List<string>();
}
}