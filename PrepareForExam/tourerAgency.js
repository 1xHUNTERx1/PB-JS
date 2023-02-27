function tourerAgency(input){
    let city = input[0];
    let equipments = input[1];
    let vipDiscount = input[2];
    let vacationLength = Number(input[3]);
    
    let totalPrice = 0 ;
    if (vacationLength > 7) {
        totalPrice = totalPrice - 1;
        
    }
    
    if(vacationLength < 1){
        console.log("Days must be positive number!");
        return;
    }
    switch (city) {
        case 'Borovets':
        case 'Bansko':
            if (equipments === 'withEquipment') {
                 totalPrice = vacationLength * 100;
                
                if (vipDiscount === 'yes') {
                    totalPrice = totalPrice * 0.90;
                
            }
            }else if (equipments === 'noEquipment'){
                totalPrice = vacationLength * 80;
                
                if (vipDiscount === 'yes') {
                totalPrice = totalPrice * 0.95;
                
                }
            }   
           
                
            break;
        case 'Varna':
        case 'Burgas':
            if (equipments === 'withBreakfast') {
                totalPrice = vacationLength * 130;
                if (vipDiscount ==='yes') {
                    totalPrice = totalPrice * 0.88;
                }
                
            }else if (equipments === 'noBreakfast'){
                totalPrice = vacationLength * 100;
                if (vipDiscount === 'yes') {
                    totalPrice = totalPrice * 0.93;
                }
            }else{
                console.log("Invalid input!");
            return;
                
            }
            
            
            break;
            default:
                console.log("Invalid input!");
                return;
            }
            console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
            
            
}
tourerAgency(["Gabrovo",

"noBreakfast",

"no",

"3"])

