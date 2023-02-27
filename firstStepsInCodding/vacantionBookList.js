function vacationBookList(input){
    let pagesCount = Number(input[0]);
    let pagesReadPerHour = Number(input[1]);
    let daysCount = Number(input[2]);
    
    let pagesPerDay = pagesCount / pagesReadPerHour / daysCount;
    console.log(pagesPerDay);
}
vacationBookList(["212 ","20 ","2 "])