const user={
    name: 'Raluca',
    sayHello: function(){
        //return "Hello, " + this.name;
        return `Hello, ${this.name}`;
    },
    sayHello2: () => {
        return `Hello, ${user.name}`;
    }
}

console.log(user.name);
console.log(user.sayHello())
console.log(user.sayHello2())