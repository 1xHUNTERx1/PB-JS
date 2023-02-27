function lunchBreak(input){
    let serialName = input[0];
    let serialLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let timeFofLunch = (1/8) * breakLength;
    let timeForBreak =  (1/4) * breakLength ;
    
    let timeLeft = timeFofLunch + timeForBreak;
    let movieTime = breakLength - timeLeft;
    if(movieTime >= serialLength){
        let time = Math.ceil(movieTime - serialLength);
        console.log(`You have enough time to watch ${serialName} and left with ${time} minutes free time.`)
        
    }
    else{
        neededTime = Math.ceil(serialLength - movieTime);
        console.log(`You don't have enough time to watch ${serialName}, you need ${neededTime} more minutes.`)

    }
   
}
lunchBreak(["Game of Thrones",

"60",

"96"])