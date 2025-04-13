function User(email, password) {
    this._email = email;
    this._password = password;

    // Define 'email' property
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });

    // Define 'password' property
    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (value) {
            this._password = value;
        }
    });
}

const chai = new User("chai@chai.com", "chai");
console.log(chai.email); // Output: CHAI@CHAI.COM