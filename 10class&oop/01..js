const user ={
    username: "JohnDoe",
    password: "12345",
    logincount:8,
    signedin: true,
    getuserdetails: function(){
        // console.log("User Details: ", this.username, this.password, this.logincount, this.signedin);
        console.log(this);
    }
}
// console.log(user.username); // JohnDoe
// console.log(user.password); // 12345 
// console.log(user.logincount); // 8
// console.log(user.signedin); // true
// console.log(user.getuserdetails()); // User Details:  JohnDoe 12345 8 true
console.log(this);
function User(username,logincount,isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;
    return this;
}
const user1 =new User("hitesh",12,true);
const user2 =new User("Ritwik",8,false);
console.log(user1); // { username: 'hitesh', logincount: 12, isloggedin: true }
console.log(user2); // { username: 'Ritwik', logincount: 8, isloggedin: false }
console.log(user1.constructor); // ƒ User(username,logincount,isloggedin)