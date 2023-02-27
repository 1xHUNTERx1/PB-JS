function suppliesForSchool(input){
    let pens = 5.80;
    let marker = 7.20;
    let acid = 1.20;

    let packagePens = Number(input[0]);
    let packageMarkers = Number(input[1]);
    let littersAcid = Number(input[2]);
    let discount = Number(input[3]);
    let percentDiscount = discount / 100;

    let priceForPens = packagePens * pens;
    let priceForMarkers = packageMarkers * marker;
    let priceForAcid = littersAcid * acid;
    let price = priceForPens + priceForMarkers + priceForAcid;
    let totalPrice = price - (price * percentDiscount);
    console.log(totalPrice)
}
suppliesForSchool(["2 ","3 ","4 ","25 "])
