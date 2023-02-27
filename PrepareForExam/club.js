function nightClub(input){
    let index = 0;
    let targetProfit = Number(input[0]);
  
   
    index++;

    let command = input[index];
    index++;

    let income = 0;

    while (command !== 'Party!') {
        let cocktailName = command;
       
        let cocktailCount = Number(input[index]);
        index++;

        let cocktailPrice = cocktailName.length;
        let totalPrice = cocktailCount * cocktailPrice;
        
        if (totalPrice % 2 !== 0) {
            totalPrice *= 0.75;
            
        }
        income += totalPrice;
        
        command = input[index];
        index++;
        if(income >= targetProfit){
            console.log("Target acquired.");
            break;
        }
    }
        
    if(command === 'Party!'){
        let sumNeeded = targetProfit - income;
        console.log(`We need ${sumNeeded.toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${income.toFixed(2)} leva.`);

}
nightClub(["100",

"Sidecar",

"7",

"Mojito",

"5",

"White Russian",

"10"])