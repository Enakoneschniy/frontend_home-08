;(() => {
    'use strict';
    function _Burger(price, calories) {
        this._price = price;
        this._calories = calories;
        this.getCost = () => this._price;
        this.getCalories = () => this._calories;

        this.add = (...expansions) => {
            expansions.forEach(item => {
                this[item]();
            });
            return this;
        };
        this.salade = () => {
            this._price = this._price + 4;
            this._calories = this._price + 25;
            return this;
        };
        this.cheese = () => {
            this._price = this._price + 4;
            this._calories = this._price + 25;
            return this;
        };
        this.ham = () => {
            this._price = this._price + 10;
            this._calories = this._price + 50;
            return this;
        };
        this.sauce = () => {
            this._price = this._price + 5;
            this._calories = this._price + 0;
            return this;
        };
        this.mayonnaise = () => {
            this._price = this._price + 4;
            this._calories = this._price + 10;
            return this;
        };
    }

    function Burger(burgerSize) {
        switch (burgerSize) {
            case "small":
                return new _Burger(17, 250);
            case "big":
                return new _Burger(25, 340);
            default:
                break;
        }
    }

    let burger = new Burger("small").add("salade", "sauce", "ham");

    console.log(burger.getCost());
})();