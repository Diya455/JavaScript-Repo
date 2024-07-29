//Immediately Invoked Function Expressions.

(function one()
{
    console.log("DB connected");
}) ();                //here semicolon is must for a runnable program.


(function two(name)
{
    console.log(`DB connected ,${name}`);       //for adding a variable.
}) ("Diya");                

