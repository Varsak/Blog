using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Exceptions
{
    class NotFoundException : Exception
    {
        public NotFoundException() : base() { }
        public NotFoundException(string str) : base(str) { }
        public NotFoundException(string str, Exception inner) : base(str, inner) { }
        protected NotFoundException(
            System.Runtime.Serialization.SerializationInfo si,
            System.Runtime.Serialization.StreamingContext sc) : base(si, sc) { }
        public override string ToString() { return Message; }
    }
}
