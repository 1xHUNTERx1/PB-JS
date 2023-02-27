function goldMine(input) {
    let locationCount = Number(input.shift());


    for (let location = 0; location < locationCount; location++) {
        let expectedGoldTargetPerDay = Number(input.shift());
        let workDays = Number(input.shift());

        let totalGoldPerLocation = 0;
        for (let day = 0; day < workDays; day++) {
            let quantity = Number(input.shift());
            totalGoldPerLocation += quantity;
        }
        let avgGoldPerDay = totalGoldPerLocation / workDays;
        if(avgGoldPerDay >= expectedGoldTargetPerDay){
           console.log(`Good job! Average gold per day: ${avgGoldPerDay.toFixed(2)}.`)
        }
        else{
            console.log(`You need ${(expectedGoldTargetPerDay - avgGoldPerDay).toFixed(2)} gold.`)
        }
    }
}

goldMine(["2",
         "10",
         "3",
         "10",
         "10",
         "11",
         "20",
         "2",
         "20",
         "10"])
