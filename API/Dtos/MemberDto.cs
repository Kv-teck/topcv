using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Extensions;

namespace API.Dtos
{
    public class MemberDto
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string UserName { get; set; }
        public required string PhotoUrl {get; set;}
        public required string Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? ProfileTitle { get; set; }
        public string? City { get; set; }
        public string? Country { get; set; }
        public int Age { get; set; }
        public string? Gender { get; set; }
        public string? Introduction { get; set; }
        public ICollection<Experience>? Experiences { get; set; }
        public ICollection<Education>? Educations { get; set; }
        public ICollection<Skill>? Skills { get; set; }
        public ICollection<Certification>? Certifications { get; set; }
        public ICollection<Language>? Languages { get; set; }
        public IList<string> Interests { get; set; } = new List<string>();
        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;
        public ICollection<PhotoDto>? Photos { get; set; }
    }
}