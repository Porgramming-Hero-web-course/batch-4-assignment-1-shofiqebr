# Why Are Type Guards Necessary in TypeScript?

TypeScript adds static typing to JavaScript, making code safer by catching errors before runtime. However, because JavaScript is dynamically typed, we may not always know the exact type of a variable, especially when using union types (like `string | number`). Type Guards in TypeScript help us check a variable's type at runtime, so we can handle each type correctly.

## What Are Type Guards?

Type Guards are expressions or functions that let TypeScript narrow down the type of a variable within a certain block of code. They ensure that we treat variables only in ways that are safe and valid for their type. For example, if a variable can be either a `string` or a `number`, a Type Guard can help determine if it’s one or the other before using it.

## Types of Type Guards

There are a few different types of Type Guards in TypeScript:

### 1. `typeof` Type Guard

The `typeof` operator is great for checking primitive types like `string`, `number`, `boolean`, etc. It’s simple but limited to primitive types only.

**Example:**
```typescript
function doubleValue(value: string | number) {
  if (typeof value === "number") {
    return value * 2; // TypeScript knows `value` is a number here
  } else {
    return value + value; // TypeScript knows `value` is a string here
  }
}

console.log(doubleValue(5)); // 10
console.log(doubleValue("Hello")); // "HelloHello"

2. instanceof Type Guard
The instanceof operator is useful for checking if an object is an instance of a specific class. This is handy when working with classes or custom types.


class Dog {
  bark() {
    return "Woof!";
  }
}

class Cat {
  meow() {
    return "Meow!";
  }
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    return animal.bark();
  } else {
    return animal.meow();
  }
}

const myDog = new Dog();
console.log(speak(myDog)); // "Woof!"


3. Custom Type Guards (User-Defined Type Guards)

Sometimes, we need more complex checks. In these cases, we can write a custom Type Guard function that returns true or false based on whether a variable is of a specific type. To make a function a Type Guard, its return type should be formatted as variableName is Type.

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim(); // TypeScript knows animal is a Fish
  } else {
    animal.fly(); // TypeScript knows animal is a Bird
  }
}
4. in Operator Type Guard

The in operator checks if an object has a particular property. This is especially useful when working with objects with overlapping properties.

type Car = { drive: () => void };
type Boat = { sail: () => void };

function operate(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive(); // TypeScript knows vehicle is a Car
  } else {
    vehicle.sail(); // TypeScript knows vehicle is a Boat
  }
}
