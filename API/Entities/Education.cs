using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Education
    {
        public int Id { get; set; }
        public required  string Degree { get; set; }
        public required  string Institution { get; set; }
        public required  string Location { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public ICollection<string> Achievements { get; set; } = new List<string>();
    }
}