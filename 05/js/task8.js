'use strict';

let age_in = parseInt(prompt('Insert the year of your birth:', ''));

let year = new Date();

let CurrYear = year.getFullYear();

let age = (CurrYear - age_in);

if (age >= 16) {
    console.log('Welcome!');
} else {
    console.log('Access Denied!');
}