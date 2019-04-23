/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - JS doesn't know exactly what you're refering to so it applies on a wider scale. The least specific use of the "this" keyword. 
* 2. Implicit Binding - For use with objects and methods. Points directly to the method that is called. Very straight-forward and specific. 
* 3. Explicit Binding - For use with functions to access outside ojects. Use call or apply keywords to invoke.
* 4. Bind - Saves the "this" keyword for later using a function. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding
const person = {
    "name": "Ben",
    "coffee": "Machiatto",
    "order": function(){
        return `${this.name} always orders the ${this.coffee}`;
    } 
}
console.log (person.order());
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding