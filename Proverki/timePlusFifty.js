function timePlusFifty(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalHours = hours * 60 + minutes + 15;
    let finalMins = Math.floor(totalHours / 60);
    let mins = totalHours % 60;

    if(finalMins >= 24){
        finalMins = 0;
    }   
    if(mins < 10) {
        console.log (`${finalMins}:0${mins}`);
        
    }else{
        console.log(`${finalMins}:${mins}`)
    }


}
timePlusFifty(["23", "59"])