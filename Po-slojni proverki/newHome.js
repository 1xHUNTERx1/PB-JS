function newHome(input){
    let flowers = input[0];
    let flowerCount = Number(input[1])
    let flowersPrice = Number(input[2]);

    let totalPrice = 0;

    switch(flowers)
    {
        case 'Roses':
            totalPrice = flowerCount * 5.00;
            break;
        case 'Dahlias':
            totalPrice = flowerCount * 3.80;
            break;
        case 'Tulips':
            totalPrice = flowerCount * 2.80;
            break;
        case 'Narcissus':
            totalPrice = flowerCount * 3.00;
            break;
        case 'Gladiolus':
            totalPrice = flowerCount * 2.50;
            break;

    }
    if (flowers === 'Rose' && flowerCount > 80){
        totalPrice *+ 0.90;
    }else if ( flowers === 'Dahlias' && flowerCount > 90){
        totalPrice *= 0.85;
    }else if (flowers === 'Tulips' && flowerCount > 80 ){
        totalPrice *= 0.85;
    }else if( flowers === 'Narcissus' && flowerCount > 120){
        totalPrice *= 0.85;
    }else if(flowers ==='Gladiolus' && flowerCount > 80){
        totalPrice * 0.80;
    }
    if(totalPrice > flowersPrice){
        console.log(ok);
    }else if(totalPrice < flowersPrice){
        console.log(noitk);
    }
}
newHome(["Roses",

"55",

"250"])