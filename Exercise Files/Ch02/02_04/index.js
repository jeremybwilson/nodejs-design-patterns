var scout_prototype = require('./scout_prototype');

var jeremy = scout_prototype.clone();
jeremy.name = 'Jeremy Wilson';
jeremy.addItemToList('slingshot');

// var eve = new Shopper('Eve Porcello');
var eve = scout_prototype.clone();
eve.name = 'Eve Porcello';
eve.addItemToList('reading light');

console.log( `${jeremy.name}: ${jeremy.shoppingList}` );
console.log( `${eve.name}: ${eve.shoppingList}` );
