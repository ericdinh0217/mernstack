// Inheritance
// Encapsulation - private, public, Internal, protected, ...
// Polymorphism
// Abstraction
// access modifiers : in languages like java help us to prevent/limit the usage of class members

// In Javascript : When we have a function within a function and parent function returns child function,
// then we can limit what can be accessed by external user through child function, this is termed as closure.

// currying - when a function returns another instead of values and also repeats same thing we call it currying

function Parent(userName, userPin)
{
    // Private scope of parent function
    var name = "David";
    var pin = "25694158";
    var accountName ="Savings account"; //public - on authentication success
    var accountBalance = "$20000"; // public - on authentication success
    var accountPassword = "3j2k1l129a"; // private - shouldn't be accesses outside
    
    var child = function Child(getBalance)
    {
        // Public scope which is accessible to others
        if(getBalance && name == userName && pin == userPin)
        {
            return {
                name : name,
                accountName : accountName,
                accountBalance : accountBalance
            };
        }
    }

    return child;
}
var balanceInfo = Parent("Wanda", "25694158");
console.log(balanceInfo(true));

var balanceInfo = Parent("David", "25694158");
console.log(balanceInfo(true));