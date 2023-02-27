function movie(input){
    let budget =  Number(input.shift());
    let actorsCount = Number(input.shift());
    let outfit = Number(input.shift());

    let decorPrice = budget * 0.10;
    if(actorsCount > 150){
        outfit -=  outfit * 0.10;
    }
    let outfitPrice = outfit * actorsCount;
    let moneyNeeded = decorPrice + outfitPrice;
    let result = Math.abs(budget - moneyNeeded);
    
    if(moneyNeeded > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${result.toFixed(2)} leva more.`);
    }
    else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${result.toFixed(2)} leva left. `);
    }
}
movie
(["9587.88",
"222",
"55.68"])
