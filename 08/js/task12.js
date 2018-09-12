'use strict';

function Product( price, kkal ) {
    this.price = price;
    this.kkal = kkal;
}
var bread = {
	small: { price: 17, kkal: 250 },
	big: { price: 25, kkal: 340 }
}
var standart = {
	cheese: { price: 4, kkal: 25},
	salad: { price: 5, kkal: 5 },
	ham: { price: 10, kkal: 50 },
}
var toping = {
	sauce: { price: 5, kkal: 0 },
	mayonnaise: { price: 4, kkal: 10 },
}
function createBurger2 ( bread, standart, extra ) {
	if ( standart.length === 0 ) {
		throw "Choose stuffing";
	}
	var order = standart.concat(bread, extra);
	order.forEach(element => {
		if ( isNaN(element.price ) ) {
			throw "Price is not number";
		} else if ( isNaN(element.kkal ) ) {
			throw "Kkal is not number";
		};
	});
	return  order.reduce( ( res, element ) => {
		res.price += element.price;
		res.kkal += element.kkal;
		return res;
	}, { price: 0, kkal: 0 });
}
try {
	console.log(createBurger2(bread.small, [standart.cheese, standart.salad], [toping.sauce]));
	console.log(createBurger2(bread.small, [standart.cheese, standart.salad], []));
	console.log(createBurger2(bread.small, [standart.cheese, standart.salad], [toping.sauce, toping.mayonnaise]));
	console.log(createBurger2(bread.small, [], []));
	
} catch(e) {
	console.log(e);
	try {
		console.log(createBurger2({price:"a", kkal:0}, [standart.cheese, standart.salad], toping.sauce));
	} catch(e) {
		console.log(e);
		console.log(createBurger2({price:0, kkal:"a"}, [standart.cheese, standart.salad], toping.sauce));
	}
}

