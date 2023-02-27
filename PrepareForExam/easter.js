function easter(input){
    let index = 0;
    let bread = Number(input[index])
    index++;
    
    let maxScore = 0;
    let bestBaker = '';
    
    for (let breadCount = 1; breadCount <= bread ; breadCount++) {
        let bakerName = input[index];
        index++;
        
        let command = input[index];
        index++;
        
        let totalScore = 0;
        
        while( command !== 'Stop'){
            
            let grade = Number(command);
            
            
            totalScore += grade;
            
            command = input[index];
            index++;

        }
        console.log(`${bakerName} has ${totalScore} points.`);
        
        
        if( totalScore > maxScore){
            maxScore = totalScore;
            bestBaker = bakerName;
            console.log(`${bakerName} is the new number 1!`);
        }
    }
    console.log(`${bestBaker} won competition with ${maxScore} points!`)

}
easter(["3",

"Chef Manchev",

"10",

"10",

"10",

"10",

"Stop",

"Natalie",

"8",

"2",

"9",

"Stop",

"George",

"9",

"2",

"4",

"2",

"Stop"])