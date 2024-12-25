function greeter(person: string): string {
  return "Hello, " + person;
}

function greetUsers(users: string[]): string[] {
  return users.map(user => greeter(user));
}

let user = ["Jane User", "John User"];

console.log(greetUsers(user)); //This will greet each user individually

//If you only need to greet the first user
console.log(greeter(user[0]));