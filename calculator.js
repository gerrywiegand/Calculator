
function add(a, b) { // Addition function
    let sum=a + b // Calculate sum
    console.log (sum) // Print result to console
    history.push (sum) // Add result to history
    return sum; // Return result
}
function subtract(a, b) { // Subtraction function
    let difference=a - b // Calculate difference
    console.log (difference); // Print result to console
    history.push (difference) // Add result to history
    return difference; // Return result
}
function multiply(a, b) { // Multiplication function
    let result=a * b // calculate multiplication
    console.log (result) // Print result to console
    history.push (result) // Add result to history
    return result; // Return result
}
function divide(a, b) { // Division function
    
    if ( b === 0)  // divide by zero error
        {console.log ("Cannot divide by zero") // Print error message
        return null; // do NOT return infinity (This took forever to figure out)
        }
    else { let solution= a / b // calculate division
    console.log (solution) // Print result to console
    history.push (solution) // Add result to history
    return solution; // Return result
    }
}
const history = []

function showHistory() {
    console.log(history)
    
}
add(2, 3)
subtract (5, 10)
multiply (100, 15)
divide (20, 4)
divide (5, 0)
divide (0, 5)
showHistory ()
