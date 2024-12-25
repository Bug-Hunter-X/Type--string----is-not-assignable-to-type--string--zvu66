function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

console.log(greeter(user)); //This will result in an error because user is an array of strings rather than a single string