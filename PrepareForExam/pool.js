function pool(input){
    let people = Number(input[0]);
    let enterFee = Number(input[1]);
    let priceForLounger = Number(input[2]);
    let priceForUmbrella = Number(input[3]);

    let totalFee = people * enterFee;
    let umbrellaCount = Math.ceil(people /    2);
    let loungerCount = Math.ceil(0.75 * people);

    let umbrellaPrice = umbrellaCount * priceForUmbrella;
    let loungerPrice = loungerCount * priceForLounger;

    let totalPrice = totalFee + umbrellaPrice + loungerPrice;

    console.log(`${totalPrice.toFixed(2)} lv.`)
}
pool(["50",

"6",

"8",

"4"])