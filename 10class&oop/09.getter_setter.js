class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    //email
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
       this._email=value;
    }
    //pasword
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password= value.toUpperCase();
    }
}
const hitesh=new User("h@hitesh.ai","123")
// console.log(hitesh.password);
// const ritwik=new User("h@hitesh.ai","ABC")
// console.log(ritwik.password);
console.log(hitesh.email);  