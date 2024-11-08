
{

    function getProperty<T extends { name: string }, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }
const person = { name: "shofiq", age: 30 };
console.log(getProperty(person, "name"));


}