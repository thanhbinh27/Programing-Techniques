"use strict";

function hello()
{
    a =1; //referenceError: a is not defined
    console.log("a = "+a)
    //The code below use strict mode
    function world()
    {       
        //The code here also use strict mode
    }
}

hello();

//The code below do not use strict mode anymore