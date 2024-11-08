"use strict";
{
    function getProperty(obj, key) {
        return obj[key];
    }
    const person = { name: "shofiq", age: 30 };
    console.log(getProperty(person, "name"));
}
