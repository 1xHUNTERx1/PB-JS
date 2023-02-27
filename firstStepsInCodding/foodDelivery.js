function foodDelivery(input){
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarianMenu = Number(input[2]);

    let priceForChicken = chickenMenu * 10.35;
    let priceForFish = fishMenu * 12.40;
    let priceForVegetarian = vegetarianMenu * 8.15;
    let totalMenuPrice = priceForChicken + priceForFish + priceForVegetarian;
    let desertPercent = totalMenuPrice * 0.20 ;
    let desertPrice = desertPercent;
    let totalPrice = desertPrice + totalMenuPrice + 2.50;
    console.log(totalPrice);
}
foodDelivery(["2 ","4 ","3 "])