function basketballEquipment(input){
    let priceForYear = Number(input[0]); 

    let shoesPrice = 0.40 * priceForYear;
    let shoesTotalPrice = priceForYear - shoesPrice;
    
    let basketballOutfit =  0.20 *shoesTotalPrice ;
    let basketballOutfitPrice = shoesTotalPrice - basketballOutfit;
    
    let basketballBall =  (1 / 4) *basketballOutfitPrice ;
    let basketballAccessories =  (1 / 5) * basketballBall ;

    let totalPrice = priceForYear + shoesTotalPrice + basketballOutfitPrice + basketballBall + basketballAccessories;
    console.log(totalPrice);
}
basketballEquipment(["365 "])