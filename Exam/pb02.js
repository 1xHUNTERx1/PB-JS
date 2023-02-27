function firmForProcessors(input){
        let processorCount = Number(input[0]);
        let workersCount = Number(input[1]);
        let workDays = Number(input[2]);

        let workHours = workersCount * workDays * 8;
        let doneProcessors = Math.floor(workHours / 3);
        if( doneProcessors < processorCount){
            let processorNeeded = processorCount - doneProcessors;
            let looses = processorNeeded * 110.10;
            console.log(`Losses: -> ${looses.toFixed(2)} BGN`);
        }else{
            let profit = (doneProcessors - processorCount)  * 110.10;
            console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
        }


}
firmForProcessors
(["500",
"8",
"20"])
