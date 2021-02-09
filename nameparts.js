"use strict";

const name = "Albus Percival Wulfric Brian Dumbledore";

const firstSpace = name.indexOf(" ");
const lastSpace = name.lastIndexOf(" ");

const firstName = name.substring(0,firstSpace);
const middleName = name.substring(firstSpace+1, lastSpace);
const lastName = name.substring(lastSpace+1);

console.log(`first is _${firstName}_
middle is _${middleName}_
last is _${lastName}_`);