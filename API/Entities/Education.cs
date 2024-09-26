using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Education
    {
        public int Id { get; set; }
        public  string? Degree { get; set; }
        public  string? Institution { get; set; }
        public  string? Location { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public ICollection<string> Achievements { get; set; } = new List<string>();
    }
}