# Type 'string[]' is not assignable to type 'string'
This TypeScript bug demonstrates a common type error where an array of strings is passed to a function expecting a single string.  The solution involves ensuring the function receives the correct type or adjusting the function's logic to handle arrays appropriately.

## Bug Description
The `greeter` function expects a single string argument.  However, the `user` variable is an array of strings. Attempting to pass `user` to `greeter` results in a type error because TypeScript correctly identifies the type mismatch.

## Solution
The solution depends on the desired behavior.  If the intention is to greet each user individually, the solution involves iterating over the array. If a single greeting is needed, the input should be a single string.

