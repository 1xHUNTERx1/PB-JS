function vacationBooksList(input){
    let pagesCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let dayCount = Number(input[2]);


    let totalHoursNeeded = pagesCount / pagesPerHour;
    let hoursPerDay = totalHoursNeeded / dayCount;
    console.log(hoursPerDay);
}
vacationBooksList(["212", "20", "2" ]);