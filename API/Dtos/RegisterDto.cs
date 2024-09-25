using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using API.Entities;
using API.Extensions;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public required string Username { get; set; }

        [Required]
        [MinLength(8)]
        public required string Password { get; set; }

        [Required]
        public required string Name { get; set; }

        [Required]
        [EmailAddress]
        public required string Email { get; set; }

        public string? PhoneNumber { get; set; }
        public string? ProfileTitle { get; set; }
        public string? City { get; set; }
        public string? Country { get; set; }
        public string? Gender { get; set; }
        public string? Introduction { get; set; }

        public List<Experience> Experiences { get; set; } = new List<Experience>();
        public List<Education> Educations { get; set; } = new List<Education>();
        public List<Skill> Skills { get; set; } = new List<Skill>();
        public List<Certification> Certifications { get; set; } = new List<Certification>();
        public List<Language> Languages { get; set; } = new List<Language>();
        public List<string> Interests { get; set; } = new List<string>();
    }
}
