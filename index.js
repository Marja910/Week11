let a=Number(500);
let b=Number(950);
let c=Number(1200);
let d=Number(1350);

let sum=(a + b + c + d);
console.log(sum)

sum.textContent=(a + b + c + d);

let basketSum = document.querySelector('.basket__sum');
basketSum.textContent = sum;

function changePrice() {
    let totalPriceDiscount = sum * 0.8;
    basketSum.textContent = totalPriceDiscount;
}
sum.textContent=(totalPriceDiscount);