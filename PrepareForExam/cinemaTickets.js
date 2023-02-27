function cinema(input){
    let index = 0;
    let movieName = input[index];
    index++;
    let spots = Number(input[index]);
    index++;
    let ticketType = input[index];
    index++;
    let command = input[index];
    index++;
    while (command !== 'Finish') {
        
        while (command !== 'End') {

             let tickets = ticketType; 



            console.log(tickets);
        }

    }

}cinema(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])