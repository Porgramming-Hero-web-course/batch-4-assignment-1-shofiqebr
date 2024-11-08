"use strict";
{
    const updateProfile = (obj, update) => {
        return Object.assign(Object.assign({}, obj), update);
    };
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { email: 'g@bigint.com' }));
}
