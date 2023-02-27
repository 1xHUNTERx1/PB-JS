function fitnessCenter(input){
    let peopleCount = Number(input[0]);
        let backCount = 0;
        let chestCount = 0;
        let legsCount = 0;
        let absCount = 0;
        let shakeCount = 0;
        let barCount = 0;
        
        for (let currentVisitor = 1; currentVisitor <= peopleCount; currentVisitor++){
            let typeWorkout = input[currentVisitor];

            if (typeWorkout === 'Back') {
                backCount++;
                
            }else if(typeWorkout === 'Chest'){
                chestCount++;
            }else if (typeWorkout === 'Legs'){
                legsCount++;
            }else if(typeWorkout === 'Abs'){
                absCount++;
            }else if(typeWorkout === 'Protein shake'){
                shakeCount++;
            }else if(typeWorkout ==='Protein bar'){
                barCount++;
            }


        }
        console.log(`${backCount} - back`)
        console.log(`${chestCount} - chest`)
        console.log(`${legsCount} - legs`)
        console.log(`${absCount} - abs`)
        console.log(`${shakeCount} - protein shake`)
        console.log(`${barCount} - protein bar`)
        
        let totalWorkouts = backCount + legsCount + absCount + chestCount;
        let totalProtein = shakeCount + barCount;

        let workoutPercent = (totalWorkouts / peopleCount) * 100;
        let proteinPercent = (totalProtein / peopleCount) * 100;


        console.log(`${workoutPercent.toFixed(2)}% - work out`);
        console.log(`${proteinPercent.toFixed(2)}% - protein`);
        
}       

fitnessCenter(["7",

"Chest",

"Back",

"Legs",

"Legs",

"Abs",

"Protein shake",

"Protein bar"])