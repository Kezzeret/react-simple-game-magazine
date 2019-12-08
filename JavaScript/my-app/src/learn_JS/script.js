"use strict"

let calculator = {
    a: 3,
    b: 4,
    read: function(n1, n2) 
    {
        this.a = n1; this.b = n2;
    },
    sum: function() 
    {
        return (this.a + this.b);
    },
    mul: function() 
    {
        return (this.a * this.b);
    }
  };
  
 
  alert( calculator.sum() );
  alert( calculator.mul() );
  calculator.read();