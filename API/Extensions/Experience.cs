using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Extensions
{
    public class Experience
    {
        public int Id { get; set; }
        public required string JobTitle { get; set; }
        public required string Company { get; set; }
        public required string Location { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public ICollection<string> Responsibilities { get; set; } = new List<string>();
    }
}