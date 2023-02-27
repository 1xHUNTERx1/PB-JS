function safari(input){
    let budget = Number(input[0]);
    let fuel = Number(input[1]);
    let weekDay = input[2];

    let fuelPrice= fuel * 2.10;
    let totalPrice = fuelPrice + 100;
    
    if ( weekDay === 'Saturday') {
        totalPrice = totalPrice * 0.90;

        
    }else{
        totalPrice = totalPrice * 0.80;
    }
    console.log()
    
    if(budget >= totalPrice){
        moneyLeft = budget - totalPrice;
        console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)}lv`)
    }else{
        neededMoney = totalPrice - budget;
        console.log(`Not enough money! Money needed: ${neededMoney.toFixed(2)} lv.`)
    }
    
}
safari(["120",

"30",

"Saturday"])