function shopping(input){
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videoCardPrice = videoCards * 250;
    
    let processorsPrice = 0.35 * videoCardPrice;
    let sumProcessors = processors * processorsPrice;
    
    let ramPrice = 0.10 * videoCardPrice ;
    let sumRam = ram * ramPrice;
   
    let totalPrice = videoCardPrice + sumProcessors + sumRam;
     
    if(videoCards > processors){
        totalPrice = 0.85 * totalPrice;
    }

    if(totalPrice > budget){
        let moneyNeeded = Math.abs(totalPrice - budget)
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    }
    
    else {
        totalPrice = budget - totalPrice;
    console.log(`You have ${totalPrice.toFixed(2)} leva left!`)
    }
   
}
shopping(["900",

"2",

"1",

"3"])