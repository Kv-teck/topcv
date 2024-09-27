using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class UserDto
    {
        public required string Name {get; set;}
        public required string UserName {get; set;}
        public required string Token {get; set;}
    }
}