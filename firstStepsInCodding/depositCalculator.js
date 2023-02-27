function depositCalculator(input){
    let dept = Number(input[0]);
    let depositLength = Number(input[1]);
    let yearDepositIncrease = Number(input[2]);
    let yearDepositIncreasePercent = yearDepositIncrease / 100;

    let sum = dept + depositLength * (( dept * yearDepositIncreasePercent) / 12);
    console.log(sum);
}
depositCalculator(["2350",

"6 ",

"7 "])