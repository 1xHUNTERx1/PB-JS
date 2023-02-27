function christmasGifts(input) {
    let years = input[0];

    let kidsCount = 0;
    let adultCount = 0;
    while (true) {

        if(input[0] === "Christmas"){
            break;
        }
        years = Number(input.shift());
        if (years <= 16) {
            kidsCount++;
        }
        else if (years > 16) {
            adultCount++;
        }

        
    }

    let moneyForToys = kidsCount * 5;
    let moneyForSweaters = adultCount * 15;

    console.log(`Number of adults: ${adultCount}`);
    console.log(`Number of kids: ${kidsCount}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);

}
christmasGifts
    (["16",
        "20",
        "46",
        "12",
        "8",
        "20",
        "49",
        "Christmas"])
