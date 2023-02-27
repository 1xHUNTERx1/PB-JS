function repainting(input){
    let coverageForPaint = 1.50;
    let paintPerLiter = 14.50;
    let thinnerForPaint = 5.00;
    let bag = 0.40;

    let coverage = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hoursOfWork = Number(input[3]);

    let percent = paint / 10;
    
    
    let priceForCoverage = (coverage + 2) * coverageForPaint; 
    let priceForPaint = (paint + percent)  * paintPerLiter;
    let priceForThinner = thinner * thinnerForPaint;
    let totalPrice = priceForCoverage + priceForPaint + priceForThinner + bag;
    
    let salaryPerHour = 0.30 * totalPrice;
    let totalWorkPrice = hoursOfWork * salaryPerHour;
    
    let salary = totalPrice + totalWorkPrice;
    
    console.log(salary);
}
repainting(["10","11","4","8"])