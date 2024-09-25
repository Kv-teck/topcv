using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Certification
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string IssuedBy { get; set; }
        public DateTime IssueDate { get; set; }
        public required string CredentialId { get; set; }
    }
}