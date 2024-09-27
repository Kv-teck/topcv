using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Language
    {
        public int Id { get; set; }
        public required  string Name { get; set; }
        public required  string Proficiency { get; set; }
    }
}