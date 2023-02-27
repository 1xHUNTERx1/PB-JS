function oscars(input){
    let rent = Number(input[0]);

    let oscarPrice = rent * 0.70;
    let kettering = oscarPrice * 0.85;
    let musicPrice = (1 / 2) * kettering;

    let totalPrice = rent + oscarPrice + kettering + musicPrice;
    console.log(totalPrice.toFixed(2));
}oscars(["3500"])