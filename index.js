let a=Number(500);
let b=Number(950);
let c=Number(1200);
let d=Number(1350);

let sum=(a + b + c + d);
console.log(sum)

sum.textContent=(a + b + c + d);

function changePrice() {
    let total = sum * 0.8;
}
sum.textContent=(total);