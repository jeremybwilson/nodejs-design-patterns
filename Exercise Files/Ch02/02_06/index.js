var userFactory = require("./userFactory");

var jeremy = userFactory('Jeremy Wilson', 100);
var eve = userFactory('Eve Porcello', 100, 'employee', 'This and That');

eve.payDay(100);

console.log( jeremy.toString() )
console.log( eve.toString() )
