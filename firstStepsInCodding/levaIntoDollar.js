function usdToBgn(input){
    let usd = Number(input[0]);

    let bgn = 1.79549;
    let converted = usd * bgn;
    console.log(converted);
}
usdToBgn(["22"]);
