const User={
    _email:'h@hc.com',
    _password:'123',
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value;
    },
}
const tea=Object.create(User)
console.log(tea._email);
