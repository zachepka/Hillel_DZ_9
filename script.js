const rate = 26;
let USD = 10;

for (USD; USD <= 100; USD += 10) {
    const UAH = USD * rate;
    
    console.log(`${USD}USD = ${UAH} UAH`);
}