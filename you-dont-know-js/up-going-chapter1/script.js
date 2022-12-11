let bankAccount = 1000;
let spendingThreshold = (20/100) * bankAccount;
bankAccount = bankAccount - spendingThreshold;
let phoneOwn = 0;
let accesoriesOwn = 0;
const TAX_RATE = 0.05;
let accesoryPrice = 9;
let phonePrice = 80;
accesoryPrice += (accesoryPrice * TAX_RATE);
phonePrice += (phonePrice * TAX_RATE);

if (bankAccount >= phonePrice){
while (true){
bankAccount = bankAccount - phonePrice;
phoneOwn += 1;
if(bankAccount < phonePrice) break;
} 

if (spendingThreshold >= accesoryPrice){
while (true){
    spendingThreshold = spendingThreshold - accesoryPrice;
    accesoriesOwn += 1;
    if(spendingThreshold < accesoryPrice) break;
} 
} 

} else {
console.log("You cannot afford to buy, work HARD");
}

console.log("I got to buy " + phoneOwn + " phones and " + accesoriesOwn + " accesories");
console.log("Bank account: $" + bankAccount);
console.log("Spending threshold: $" + spendingThreshold);
console.log("Curent account balance: $" + (bankAccount+spendingThreshold).toFixed(2));