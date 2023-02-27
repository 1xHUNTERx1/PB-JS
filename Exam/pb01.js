function book(input){
    let priceForOnePage = Number(input[0]);
    let priceForOneBookCover = Number(input[1]);
    let discount = Number(input[2]);
    let payForEditor = Number(input[3]);
    let payedByTeam = Number(input[4]);
    let withTeam = payedByTeam / 100;
    let withDiscount = discount / 100 ;

    let startPrice = priceForOnePage * 899 + priceForOneBookCover * 2;
    let priceWithDiscount = startPrice - (startPrice * withDiscount);

    let priceForEditor = priceWithDiscount + payForEditor;

    let payWithTeam = priceForEditor -(priceForEditor * withTeam);

    console.log(`Avtonom should pay ${payWithTeam.toFixed(2)} BGN.`);
    

}