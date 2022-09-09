const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');


function PurchaseFlightResult (traveller, bank_data) {
    if (traveller === "Pavel Iaroshenko" && bank_data === "payment details") {
        return "ok";
    }  else   {
        return "no";
    }
}
Given('The flight has been chosen', function () {

});
When('I input {string} data', function (traveller) {
    this.traveller = traveller;
});
When('I also input {string} for payment', function (bank_data) {
    this.bank_data = bank_data;
    this.actualResult = PurchaseFlightResult(this.traveller, this.bank_data);
});
Then('I receive flight purchase {string}', function (expectedResult) {
    assert.strictEqual(this.actualResult, expectedResult);
});




function BookingFlightResult (destination, amount, date) {
    if (destination === "Paris" && amount === "2" && date === "22.08.2022") {
        return "ok";
    }  else   {
        return "no";
    }
}
Given('I have {string} and {string} of passengers', function (destination, amount) {
    this.destination = destination;
    this.amount = amount;
});
Given('I also have departure {string}', function (date) {
    this.date = date;
});
When('I input the data into the form', function () {
    this.actualResult = BookingFlightResult(this.destination, this.amount, this.date);
});
Then('I receive booking flight {string}', function (expectedResult) {
    assert.strictEqual(this.actualResult, expectedResult);
});




function BookingHotelResult (hotel, amount, checkin, checkout) {
    if (hotel === "Diva" && amount === "2" && checkin === "22.08.2022" && checkout === "30.08.2022") {
        return "ok";
    }  else   {
        return "no";
    }
}
Given('I have {string} and {string} of persons', function (hotel, amount) {
    this.hotel = hotel;
    this.amount = amount;
});
Given ('I have {string} and {string} dates', function (checkin, checkout) {
    this.checkin = checkin;
    this.checkout = checkout;
});
When('I input the data', function () {
    this.actualResult = BookingHotelResult(this.hotel, this.amount, this.checkin, this.checkout);
});
Then('I receive booking hotel {string}', function (expectedResult) {
    assert.strictEqual(this.actualResult, expectedResult);
});





function SignUpResult (user, pass) {
    if (user === "username" && pass === "password") {
        return "ok";
    }  else   {
        return "no";
    }
}
Given('I want to register with {string} and {string}', function (user, pass) {
    this.username = user;
    this.password = pass;
});
When('I try these credentials', function () {
    this.actualResult = SignUpResult(this.username, this.password);
});
Then('I receive sign in {string}', function (expectedResult) {
    assert.strictEqual(this.actualResult, expectedResult);
});




function SignInResult (user, pass) {
    if (user === "username" && pass === "password") {
        return "ok";
    }  else   {
        return "no";
    }
}
Given('I am registered with {string} and {string}', function (user, pass) {
   this.username = user;
   this.password = pass;
});
When('I sign in with my credentials', function () {
    this.actualResult = SignInResult(this.username, this.password);
});
Then('I receive sign up {string}', function (expectedResult) {
    assert.strictEqual(this.actualResult, expectedResult);
});




function isItFriday(today) {
    if (today === "Friday") {
        return "TGIF";
    } else {
        return "Nope";
    }
}
Given('today is {string}', function (givenDay) {
    this.today = givenDay;
});
When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});
Then('I should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});
