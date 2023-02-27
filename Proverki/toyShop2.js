function toyShop(input){
    let vacationPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDollsCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let toysPrice = puzzleCount * 2.60 + talkingDollsCount * 3 + teddyBearCount *4.10 + minionCount * 8.20 + trucksCount * 2;
    let toysCount = puzzleCount + talkingDollsCount + teddyBearCount + minionCount + trucksCount;

    if( toysCount >= 50){
        toysPrice = 0.75 * toysPrice ;
    }
    let moneyWon = toysPrice;
    moneyWon = 0.90 * moneyWon;
    if (moneyWon >= vacationPrice){
        let moneyLeft = moneyWon - vacationPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)

    }else{
        let moneyNeeded = vacationPrice - moneyWon;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
        
    }
}
toyShop(["40.8","20","25","30","50","10"])